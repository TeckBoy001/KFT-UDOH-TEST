import json

with open('drive_ivd_decoded.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# The structure is usually a nested list
items = []

def extract_items(obj):
    if isinstance(obj, list):
        # Drive items typically have [id, [parent], title, mime_type, ...]
        if len(obj) >= 4 and isinstance(obj[0], str) and len(obj[0]) > 20 and isinstance(obj[2], str):
            items.append({
                'id': obj[0],
                'title': obj[2],
                'mime_type': obj[3] if len(obj) > 3 else None,
                'raw': obj[:10]
            })
        for child in obj:
            extract_items(child)

extract_items(data)

print(f"Extracted {len(items)} items:")
for item in items:
    print(f"- ID: {item['id']} | Title: {item['title']} | Mime: {item['mime_type']}")

with open('files_list.json', 'w', encoding='utf-8') as f:
    json.dump(items, f, indent=2)
