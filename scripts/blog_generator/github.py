"""GitHub integration for committing blog posts."""

import base64
import os

from github import Github, GithubException, InputGitTreeElement
from prefect import task

from .config import IMAGE_PATH_TEMPLATE, POST_PATH_TEMPLATE, WEBSITE_URL


@task(name="Commit to GitHub", retries=2)
def commit_to_github(markdown_content: str, image_data: bytes, slug: str, title: str) -> str:
    """Commit the blog post and image to GitHub repository.

    Args:
        markdown_content: The formatted markdown content
        image_data: The image binary data
        slug: The post slug for URLs
        title: The post title for commit message

    Returns:
        URL of the published post

    Raises:
        ValueError: If GitHub operations fail
    """
    github_token = os.getenv("GITHUB_TOKEN")
    if not github_token:
        raise ValueError("GITHUB_TOKEN environment variable is not set")

    repo_name = os.getenv("GITHUB_REPOSITORY", "vimalhari/astrowind")

    g = Github(github_token)
    repo = g.get_repo(repo_name)

    # Paths in the repository
    post_path = POST_PATH_TEMPLATE.format(slug=slug)
    image_path = IMAGE_PATH_TEMPLATE.format(slug=slug)

    # Check if post already exists in repository
    try:
        default_branch = repo.default_branch
        existing_file = repo.get_contents(post_path, ref=default_branch)
        if existing_file:
            raise ValueError(
                f"Blog post with slug '{slug}' already exists at {post_path}. "
                "Cannot overwrite existing content. Please generate a different topic or manually remove the existing post."
            )
    except GithubException as e:
        # 404 means file doesn't exist, which is what we want
        if e.status != 404:
            raise

    # Get the default branch
    default_branch = repo.default_branch
    ref = repo.get_git_ref(f"heads/{default_branch}")
    latest_commit = repo.get_git_commit(ref.object.sha)
    base_tree = latest_commit.tree

    # Create blobs for files
    post_blob = repo.create_git_blob(markdown_content, "utf-8")
    image_blob = repo.create_git_blob(base64.b64encode(image_data).decode("utf-8"), "base64")

    # Create tree elements
    element_list = [
        InputGitTreeElement(path=image_path, mode="100644", type="blob", sha=image_blob.sha),
        InputGitTreeElement(path=post_path, mode="100644", type="blob", sha=post_blob.sha),
    ]

    # Create tree and commit
    tree = repo.create_git_tree(element_list, base_tree)
    commit_message = f"content: add blog post - {title}"
    parent = repo.get_git_commit(latest_commit.sha)
    commit = repo.create_git_commit(commit_message, tree, [parent])

    # Update reference
    ref.edit(commit.sha)

    post_url = f"{WEBSITE_URL}/{slug}"
    print(f"Successfully committed to GitHub: {post_url}")
    return post_url
