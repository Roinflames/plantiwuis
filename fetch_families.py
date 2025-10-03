
import requests
import json
from dotenv import load_dotenv
import os

load_dotenv()
secret = os.getenv("secret")

all_families = []
for i in range(1, 36):
    print(f"Fetching page {i}...")
    secret = ""
    response = requests.get(f"https://trefle.io/api/v1/families?token=", secret ,"&page={i}")
    data = response.json()
    if 'data' in data:
        all_families.extend(data['data'])

with open('C:\\Projects\\plantiwuis\\families.json', 'w') as f:
    json.dump({"data": all_families}, f, indent=4)

print("All families have been fetched and saved to families.json")
