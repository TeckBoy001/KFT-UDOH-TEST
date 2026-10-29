import urllib.request
import re
import json
import os

folders = [
    {"id": "1KFaMKe5uW1LSA1nrM_j1NFhBIq1qt6ne", "name": "1.0 PDF"},
    {"id": "1xo5uxA9xq5PRrmSZNt31vpwdXpEjCIrl", "name": "2.0 Individual designs"},
    {"id": "1BXcTNFT3khjMilxJlyoXDBv-q7Z1n-N_", "name": "3.0 PNG With BG"},
    {"id": "1QX1-O_FElOUI-EOd0IkSI6ZHeMgKm-u6", "name": "4.0 Logo PNG without BG"},
    {"id": "1GsUIn8DQlSV1hq7qN3xAS84bUv9LtrJ6", "name": "5.0 Black logo"},
    {"id": "1GvUWwU6pndaHiVLJSOZixjgJq5m4DQhn", "name": "6.0 White LOGO"}
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

all_files = []

for folder in folders:
    url = f"https://drive.google.com/drive/folders/{folder['id']}?usp=sharing"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
        
        m = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']+)'", html)
        if m:
            raw = m.group(1)
            decoded = bytes(raw, 'utf-8').decode('unicode_escape')
            data = json.loads(decoded)
            
            folder_items = []
            def extract(obj):
                if isinstance(obj, list):
                    if len(obj) >= 4 and isinstance(obj[0], str) and len(obj[0]) > 20 and isinstance(obj[2], str):
                        folder_items.append({
                            'id': obj[0],
                            'title': obj[2],
                            'mime_type': obj[3] if len(obj) > 3 else None,
                            'folder': folder['name']
                        })
                    for child in obj:
                        extract(child)
            extract(data)
            print(f"Folder '{folder['name']}': found {len(folder_items)} items")
            for it in folder_items:
                print(f"  - {it['title']} ({it['id']}) [{it['mime_type']}]")
                all_files.append(it)
        else:
            print(f"Folder '{folder['name']}': no _DRIVE_ivd found")
    except Exception as e:
        print(f"Error fetching {folder['name']}: {e}")

with open('all_drive_files.json', 'w', encoding='utf-8') as f:
    json.dump(all_files, f, indent=2)

print(f"\nTotal files discovered across all subfolders: {len(all_files)}")
