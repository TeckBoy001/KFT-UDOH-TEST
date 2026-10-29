import re
import json

with open(r'C:\Users\teckb\AppData\Local\Temp\gdrive.html', 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

print("HTML length:", len(html))

# Google Drive folder embeds items in JS variables like window['_DRIVE_ivd'] or WIZ_global_data or similar
# Let's search for script tags containing data
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
print("Total scripts found:", len(scripts))

candidates = []
for i, s in enumerate(scripts):
    if len(s) > 1000:
        candidates.append((i, len(s), s[:200]))

print("Large scripts:", len(candidates))
for idx, l, preview in candidates:
    print(f"Script {idx}: length {l}, preview: {preview[:100]}")

# Let's search for drive file IDs or URLs in scripts
# Drive file IDs are alphanumeric 25-40 chars
with open('scripts_dump.txt', 'w', encoding='utf-8') as out:
    for idx, l, preview in candidates:
        out.write(f"\n--- SCRIPT {idx} ({l} bytes) ---\n")
        out.write(scripts[idx])
