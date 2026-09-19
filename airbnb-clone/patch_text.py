with open("src/App.jsx", "r") as f:
    text = f.read()

# 1. Fix discount icon
old_icon_html = '<img className="_hbNVom" src="/photos/avatars/host-mirashya-homes.jpeg" alt="" aria-hidden="true" /><div className="_erTcst">Get 10% off your next stay.'
new_icon_html = '<img className="_hbNVom" src="/photos/icons/discount.svg" alt="" aria-hidden="true" /><div className="_erTcst">Get 10% off your next stay.'
text = text.replace(old_icon_html, new_icon_html)

# 2. Make title bold
old_title = '<h1 className="_WQsVLm">Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>'
new_title = '<h1 className="_WQsVLm"><strong>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</strong></h1>'
text = text.replace(old_title, new_title)

# 3. Make subtitle bold
old_subtitle = '<h2>Entire serviced apartment in Candolim, India</h2>'
new_subtitle = '<h2><strong>Entire serviced apartment in Candolim, India</strong></h2>'
text = text.replace(old_subtitle, new_subtitle)

with open("src/App.jsx", "w") as f:
    f.write(text)

print("Patch applied.")
