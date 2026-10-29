import re
import os
import sys

# Force utf-8 stdout
if sys.version_info[0] >= 3:
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')

temp_dir = os.environ.get('TEMP', '')
file_path = os.path.join(temp_dir, 'gdrive.html')

if not os.path.exists(file_path):
    print("File not found:", file_path)
    exit(1)

with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
    html = f.read()

# Look for titles
title_match = re.findall(r'<title>([^<]+)</title>', html)
print('Page Title:', title_match)

# Look for filename extensions
files = set(re.findall(r'([a-zA-Z0-9_\-\.\s\(\)]+\.(?:pdf|png|jpg|jpeg|docx|doc|svg|pptx|xlsx|mp4|webp))', html, re.IGNORECASE))
print('Found filenames (set):', files)

# Look for file IDs in Google Drive items
# Typically in format [ "ID", ... , "filename" ]
items = re.findall(r'\[\"([a-zA-Z0-9_-]{25,40})\"\,\[\"([^\"]+)\"', html)
print('ID & filename pairs:', items)

# Let's search for drive item metadata
# Search for JSON blocks or data-initial-data
data_blocks = re.findall(r'\[\"([a-zA-Z0-9_-]{28,35})\"\,\[\"([^\"]+)\"\,(?:\"([^\"]*)\")?', html)
print('Data blocks found:', len(data_blocks))

# Look for strings mentioning names
text_matches = set(re.findall(r'\"([^\"]{3,100})\"', html))
relevant = [s for s in text_matches if any(k in s.lower() for k in ['kft', 'fresh', 'engr', 'engineering', 'vision', 'spec', 'mission', 'letter', 'contractor', 'construction', 'oil', 'gas'])]
print('Relevant strings:', relevant[:50])

with open('drive_parsed.txt', 'w', encoding='utf-8') as out:
    out.write('Page Title: ' + str(title_match) + '\n\n')
    out.write('Filenames: ' + str(files) + '\n\n')
    out.write('Items: ' + str(items) + '\n\n')
    out.write('Relevant strings:\n')
    for r in relevant:
        out.write(r + '\n')
