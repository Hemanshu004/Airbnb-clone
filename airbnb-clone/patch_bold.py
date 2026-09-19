with open("src/index.css", "r") as f:
    text = f.read()

# Replace font-weight for title
text = text.replace('._WQsVLm{font-size:26px;line-height:30px;font-weight:500;', '._WQsVLm{font-size:26px;line-height:30px;font-weight:600;')

# Replace font-weight for subtitle
text = text.replace('._gRekoP h2{font-size:22px;line-height:26px;font-weight:500}', '._gRekoP h2{font-size:22px;line-height:26px;font-weight:600}')

with open("src/index.css", "w") as f:
    f.write(text)

print("CSS font weights patched to bold.")
