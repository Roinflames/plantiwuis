import json

with open('C:/Projects/plantiwuis/families.json', 'r') as f:
    data = json.load(f)
    print(len(data['data']))