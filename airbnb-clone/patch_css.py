with open("src/index.css", "r") as f:
    text = f.read()

# Replace font-size for title
text = text.replace('._WQsVLm{font-size:26px;', '._WQsVLm{font-size:32px;')

# Replace font-size for subtitle
text = text.replace('._gRekoP h2{font-size:22px;', '._gRekoP h2{font-size:26px;')

with open("src/index.css", "w") as f:
    f.write(text)

print("CSS font sizes patched.")
