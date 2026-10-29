from PIL import Image

im = Image.open('assets/KFT- ENGINEERING.jpeg')
w, h = im.size

# crop bottom 20%
bottom = im.crop((0, int(h * 0.78), w, h))
bottom.save('assets/footer_crop.jpg')

# crop top 25%
top = im.crop((0, 0, w, int(h * 0.25)))
top.save('assets/header_crop.jpg')

print("Cropped header and footer!")
