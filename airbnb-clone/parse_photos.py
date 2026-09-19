import re
import json

html_file = "../Romantic Jacuzzi 1BHK Candolim _ Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb.html"

with open(html_file, "r") as f:
    html = f.read()

# The photo tour sections are inside <div class="_MbzoEk">
# Let's find this container first
start_idx = html.find('class="_MbzoEk"')
end_idx = html.find('class="_kuaAPu"', start_idx) # just rough bound
if start_idx == -1:
    print("Could not find photo tour container")
    exit()

tour_html = html[start_idx:end_idx]

# Each category is inside a div with class="_AWcqip"
sections = tour_html.split('class="_AWcqip"')

categories = []
for sec in sections[1:]:
    # Extract ID
    id_match = re.search(r'id="([^"]+)"', sec)
    cat_id = id_match.group(1) if id_match else ""
    
    # Extract title
    title_match = re.search(r'<h2 class="_AnkvRF">([^<]+)</h2>', sec)
    title = title_match.group(1) if title_match else ""
    
    # Extract subtitle
    subtitle_match = re.search(r'<div class="_hvJgUS">([^<]+)</div>', sec)
    subtitle = subtitle_match.group(1) if subtitle_match else ""
    
    # Extract images
    img_matches = re.findall(r'<img[^>]+src="([^"]+)"', sec)
    
    photos = []
    for img in img_matches:
        # Extract filename from src e.g. ./dir/filename.jpeg
        filename = img.split('/')[-1]
        # the path in our app is /photos/raw/filename
        # wait, some might be in /photos/tour/ or something, but ALL raw files exist in /photos/raw/ 
        photos.append(f"/photos/raw/{filename}")
    
    categories.append({
        "id": cat_id,
        "title": title,
        "subtitle": subtitle,
        "photos": photos
    })

print(json.dumps(categories, indent=2))
