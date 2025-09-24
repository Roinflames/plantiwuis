
import requests
import json

all_families = []
for i in range(1, 36):
    print(f"Fetching page {i}...")
    response = requests.get(f"https://trefle.io/api/v1/families?token=84o7VK-4_MRDsnt_ahEJRp_5tPkyICXTs8zJjWCeTIc&page={i}")
    data = response.json()
    if 'data' in data:
        all_families.extend(data['data'])

with open('C:\\Projects\\plantiwuis\\families.json', 'w') as f:
    json.dump({"data": all_families}, f, indent=4)

print("All families have been fetched and saved to families.json")
