"""Entry point for running the blog generator as a module."""

import os
import sys
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure Prefect to use SQLite backend (no server needed)
prefect_db = Path(__file__).parent.parent / ".prefect" / "prefect.db"
prefect_db.parent.mkdir(exist_ok=True)
os.environ["PREFECT_API_DATABASE_CONNECTION_URL"] = f"sqlite+aiosqlite:///{prefect_db}"
os.environ["PREFECT_API_URL"] = "http://127.0.0.1:4200/api"
os.environ["PREFECT_SERVER_ALLOW_EPHEMERAL_MODE"] = "true"

# Add parent directory to path to allow imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from main import blog_generator_flow

if __name__ == "__main__":
    blog_generator_flow()
