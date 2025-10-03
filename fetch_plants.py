import requests
import json
import os
from dotenv import load_dotenv

# --- Configuration ---
load_dotenv()
TREFL_API_TOKEN = os.environ.get("secret")

# Base URL for Trefle API
TREFL_API_BASE_URL = "https://trefle.io/api/v1"

# Output file path
OUTPUT_FILE = "./plantiwuis-app/src/data.json"

def fetch_and_save_plants():
    if not TREFL_API_TOKEN:
        print("Error: Trefle API token not set. Please ensure 'secret' is defined in your .env file.")
        return

    headers = {
        "Authorization": f"Bearer {TREFL_API_TOKEN}"
    }

    # Fetch plants (you might want to add pagination or filters here)
    # For simplicity, fetching a small number of plants
    try:
        response = requests.get(f"{TREFL_API_BASE_URL}/plants?token={TREFL_API_TOKEN}&limit=10", headers=headers)
        response.raise_for_status()  # Raise an exception for HTTP errors
        plants_data = response.json()["data"]
    except requests.exceptions.RequestException as e:
        print(f"Error fetching plants from Trefle API: {e}")
        return

    formatted_plants = []
    for plant in plants_data:
        # Extract family name from the full family object or directly if it's a string
        family_data = plant.get("family")
        if isinstance(family_data, dict):
            family_name = family_data.get("name", "Unknown")
        elif isinstance(family_data, str):
            family_name = family_data
        else:
            family_name = "Unknown"

        # Attempt to extract variety from common_name or scientific_name
        # This is a simplified approach; more robust parsing might be needed
        variety = None
        display_name = plant.get("common_name") or plant.get("scientific_name")
        if display_name and "(" in display_name and ")" in display_name:
            parts = display_name.split("(", 1)
            name_part = parts[0].strip()
            variety_part = parts[1].split(")", 1)[0].strip()
            display_name = name_part
            variety = variety_part

        formatted_plants.append({
            "id": plant["id"],
            "name": display_name or plant.get("scientific_name", "N/A"),
            "variety": variety,
            "family": family_name,
            "care": "Información de cuidado no disponible desde Trefle. Añadir manualmente.", # Placeholder
            "stock": 10 # Default stock value
        })

    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            json.dump(formatted_plants, f, indent=4, ensure_ascii=False)
        print(f"Successfully fetched {len(formatted_plants)} plants and saved to {OUTPUT_FILE}")
    except IOError as e:
        print(f"Error writing to {OUTPUT_FILE}: {e}")

if __name__ == "__main__":
    fetch_and_save_plants()
