import shutil
import os

os.makedirs('public/assets', exist_ok=True)
if os.path.exists('assets'):
    for item in os.listdir('assets'):
        s = os.path.join('assets', item)
        d = os.path.join('public/assets', item)
        if os.path.isdir(s):
            if os.path.exists(d):
                shutil.rmtree(d)
            shutil.copytree(s, d)
        else:
            shutil.copy2(s, d)
print("Copied assets to public/assets successfully!")
