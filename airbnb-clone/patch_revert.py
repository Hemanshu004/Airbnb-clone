with open("src/App.jsx", "r") as f:
    text = f.read()

# Revert title
text = text.replace('<h1 className="_WQsVLm"><strong>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</strong></h1>', '<h1 className="_WQsVLm">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>')

# Revert subtitle
text = text.replace('<h2><strong>Entire serviced apartment in Candolim, India</strong></h2>', '<h2>Entire serviced apartment in Candolim, India</h2>')

with open("src/App.jsx", "w") as f:
    f.write(text)

print("Patch reverted.")
