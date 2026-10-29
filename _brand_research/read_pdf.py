import os
import sys

# Try importing pdf reading libraries or extract strings directly
pdf_path = os.path.join('assets', 'brand', 'KFT Brand Identity.pdf')

try:
    import pypdf
    reader = pypdf.PdfReader(pdf_path)
    text = ""
    for i, page in enumerate(reader.pages):
        text += f"\n--- PAGE {i+1} ---\n" + page.extract_text()
    with open('brand_guidelines_text.txt', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Extracted via pypdf! Pages:", len(reader.pages))
    print(text[:1500])
    sys.exit(0)
except Exception as e:
    print("pypdf not available or failed:", e)

# Try pdfminer or PyPDF2 or fitz
for mod in ['pypdf2', 'fitz', 'pdfminer']:
    try:
        __import__(mod)
        print(f"{mod} is available!")
    except ImportError:
        pass

# Fallback: extract streams / ASCII text from the PDF raw bytes
with open(pdf_path, 'rb') as f:
    raw = f.read()

import re
# Look for text strings in PDF streams (Tj or TJ operator or text blocks)
strings = re.findall(b'\(([^\(\)]{3,100})\)\s*T[jJ]', raw)
extracted_strings = [s.decode('latin-1', errors='ignore') for s in strings]
print("Direct PDF strings found:", len(extracted_strings))
with open('brand_guidelines_text.txt', 'w', encoding='utf-8') as f:
    for s in extracted_strings:
        f.write(s + '\n')
print("\nFirst 30 strings:\n", extracted_strings[:30])
