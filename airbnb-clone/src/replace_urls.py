import glob
import re

files = glob.glob("src/**/*.jsx", recursive=True) + glob.glob("src/**/*.js", recursive=True)

def replace_url(match):
    anchor = match.group(1)
    if anchor:
        # e.g., ?modal=PHOTO_TOUR_SCROLLABLE#photos -> #photos
        if anchor == "#":
            return "#"
        return anchor
    return "#"

total_replacements = 0

for file in files:
    with open(file, "r") as f:
        content = f.read()
    
    # Match the reference URL and capture the anchor part if any
    new_content, count = re.subn(
        r'https?://airbnb-clone-umber-two\.vercel\.app/[^"#]*?(#\w*)?',
        replace_url,
        content
    )
    
    if count > 0:
        total_replacements += count
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Replaced {count} URLs in {file}")

print(f"Total replacements: {total_replacements}")
