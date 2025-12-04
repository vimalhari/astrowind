"""Image generation using Google Imagen 4.0."""

import os

from google import genai
from prefect import task

from .config import (
    IMAGEN_ASPECT_RATIO,
    IMAGEN_IMAGE_SIZE,
    IMAGEN_MODEL,
    IMAGEN_NUMBER_OF_IMAGES,
)


@task(name="Generate Hero Image", retries=2)
def generate_hero_image(image_prompt: str) -> bytes:
    """Generate hero image using Imagen 4.0.

    Args:
        image_prompt: The prompt for image generation

    Returns:
        Image data as bytes (PNG format)

    Raises:
        ValueError: If image generation fails
    """
    client = genai.Client(api_key=os.getenv("GOOGLE_API_KEY"))

    response = client.models.generate_images(
        model=IMAGEN_MODEL,
        prompt=image_prompt,
        config=genai.types.GenerateImagesConfig(
            number_of_images=IMAGEN_NUMBER_OF_IMAGES,
            aspect_ratio=IMAGEN_ASPECT_RATIO,
            image_size=IMAGEN_IMAGE_SIZE,
        ),
    )

    if not response.generated_images:
        raise ValueError("No image data returned from Imagen")

    # Get the first generated image
    generated_image = response.generated_images[0]

    if generated_image.image is None:
        raise ValueError("No image object in generated response")

    pil_image = generated_image.image._pil_image

    if pil_image is None:
        raise ValueError("Failed to extract PIL image from Imagen response")

    # Convert PIL image to PNG bytes
    from io import BytesIO

    buffer = BytesIO()
    pil_image.save(buffer, format="PNG")
    image_bytes = buffer.getvalue()

    print(f"Generated image from prompt: {image_prompt[:50]}...")
    return image_bytes
