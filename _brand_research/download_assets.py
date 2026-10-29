import os
import json
import urllib.request
import re

with open('all_drive_files.json', 'r', encoding='utf-8') as f:
    files = json.load(f)

os.makedirs('assets/brand', exist_ok=True)
os.makedirs('assets/slides', exist_ok=True)
os.makedirs('assets/logos', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

def download_file(file_id, dest_path):
    # Try direct uc download
    url = f"https://drive.usercontent.google.com/download?id={file_id}&export=download&authuser=0"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as resp, open(dest_path, 'wb') as out:
            out.write(resp.read())
        # Check if we got html confirmation or real file
        with open(dest_path, 'rb') as f:
            header = f.read(20)
        if b'<!DOCTYPE html>' in header or b'<html' in header:
            # might need confirm token
            print(f"Warning: {dest_path} received HTML, trying confirm token...")
            url2 = f"https://drive.google.com/uc?export=download&id={file_id}&confirm=t"
            req2 = urllib.request.Request(url2, headers=headers)
            with urllib.request.urlopen(req2) as resp, open(dest_path, 'wb') as out:
                out.write(resp.read())
        size = os.path.getsize(dest_path)
        print(f"Downloaded {dest_path} ({size} bytes)")
        return True
    except Exception as e:
        print(f"Failed to download {dest_path}: {e}")
        return False

# Download PDF and slides and logos
for it in files:
    title = it['title']
    folder = it['folder']
    fid = it['id']
    
    if folder == '1.0 PDF':
        dest = os.path.join('assets/brand', title)
    elif folder == '2.0 Individual designs':
        dest = os.path.join('assets/slides', title)
    else:
        dest = os.path.join('assets/logos', f"{folder.replace(' ', '_')}_{title.replace(' ', '_')}")
    
    print(f"Downloading {title} to {dest}...")
    download_file(fid, dest)

print("\nFinished downloading assets!")
