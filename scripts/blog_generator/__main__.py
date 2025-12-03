"""Entry point for running the blog generator as a module."""

import sys
from pathlib import Path

# Add parent directory to path to allow imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from main import blog_generator_flow

if __name__ == "__main__":
    blog_generator_flow()
