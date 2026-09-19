with open("src/index.css", "r") as f:
    text = f.read()

# Revert font-size and weight for title
text = text.replace('._WQsVLm{font-size:32px;line-height:30px;font-weight:600;', '._WQsVLm{font-size:26px;line-height:30px;font-weight:500;')

# Revert font-size and weight for subtitle
text = text.replace('._gRekoP h2{font-size:26px;line-height:26px;font-weight:600}', '._gRekoP h2{font-size:22px;line-height:26px;font-weight:500}')

with open("src/index.css", "w") as f:
    f.write(text)

print("CSS reverted.")
