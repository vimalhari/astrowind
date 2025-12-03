"""Image generation using OpenAI DALL-E 3."""

import base64
import os
from typing import Literal, cast

from openai import (
    OpenAI,
)
from prefect import task

from .config import IMAGE_QUALITY, IMAGE_SIZE


@task(name="Generate Hero Image", retries=2)
def generate_hero_image(image_prompt: str) -> bytes:
    """Generate hero image using DALL-E 3.

    Args:
        image_prompt: The prompt for image generation

    Returns:
        Image data as bytes

    Raises:
        ValueError: If image generation fails
    """
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    response = client.images.generate(
        model="dall-e-3",
        prompt=image_prompt,
        size=cast(Literal["1024x1024", "1792x1024", "1024x1792"], IMAGE_SIZE),
        quality=cast(Literal["standard", "hd"], IMAGE_QUALITY),
        n=1,
        response_format="b64_json",
    )

    if not response.data or not response.data[0].b64_json:
        raise ValueError("No image data returned from DALL-E")

    image_data = base64.b64decode(response.data[0].b64_json)
    print(f"Generated image from prompt: {image_prompt[:50]}...")
    return image_data
