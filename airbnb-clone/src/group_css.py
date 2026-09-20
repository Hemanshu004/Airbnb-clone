import re

with open("src/index.css", "r") as f:
    lines = f.readlines()

new_lines = []
current_group = None

groups = {
    "header": "Header",
    "secondarynav": "Secondary Navigation",
    "herogallery": "Hero Gallery",
    "listinginfo": "Listing Information",
    "bookingcard": "Booking Card",
    "amenitiessection": "Amenities",
    "reviewssection": "Reviews",
    "locationsection": "Location",
    "hostsection": "Host",
    "nearbystays": "Nearby Stays",
    "phototour": "Photo Tour",
    "lightbox": "Lightbox",
    "app": "Global & App Layout",
}

for i, line in enumerate(lines):
    # Check for @media
    if line.startswith("@media"):
        if current_group != "responsive":
            current_group = "responsive"
            new_lines.append("\n/* Responsive */\n")
            
    # Check for accessibility/focus
    elif ":focus" in line or "kbd" in line:
        if current_group != "accessibility":
            current_group = "accessibility"
            new_lines.append("\n/* Accessibility / Focus */\n")
            
    # Check for class selectors
    elif line.startswith("."):
        # e.g., .header-div
        match = re.match(r'\.([a-z]+)', line)
        if match:
            prefix = match.group(1)
            if prefix in groups and prefix != current_group:
                current_group = prefix
                new_lines.append(f"\n/* {groups[prefix]} */\n")
                
    # Initial global styles
    elif line.startswith(":root") or line.startswith("body") or line.startswith("*") or line.startswith("html"):
        if current_group != "global" and current_group is None:
            current_group = "global"
            new_lines.append("\n/* Global Setup */\n")
            
    new_lines.append(line)

with open("src/index.css", "w") as f:
    f.writelines(new_lines)
    
print("Injected CSS grouping comments.")
