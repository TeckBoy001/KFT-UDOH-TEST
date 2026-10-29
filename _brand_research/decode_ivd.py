import re
import json

with open(r'C:\Users\teckb\AppData\Local\Temp\gdrive.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

m = re.search(r"window\['_DRIVE_ivd'\]\s*=\s*'([^']+)'", html)
if m:
    raw = m.group(1)
    # decode hex escapes \x5b -> [ etc.
    decoded = bytes(raw, 'utf-8').decode('unicode_escape')
    data = json.loads(decoded)
    with open('drive_ivd_decoded.json', 'w', encoding='utf-8') as out:
        json.dump(data, out, indent=2)
    print("Successfully decoded window['_DRIVE_ivd']! Written to drive_ivd_decoded.json")
else:
    print("window['_DRIVE_ivd'] not found!")
