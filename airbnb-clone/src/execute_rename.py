import json
import re
import glob

with open("src/rename_map.json", "r") as f:
    rename_map = json.load(f)

# Filter out unused
active_map = {k: v for k, v in rename_map.items() if not v.startswith("unused-")}

print(f"Applying {len(active_map)} class renames...")

jsx_files = glob.glob("src/**/*.jsx", recursive=True) + glob.glob("src/**/*.js", recursive=True)
css_files = glob.glob("src/**/*.css", recursive=True)

# 1. Update JSX and JS files
for file in jsx_files:
    with open(file, "r") as f:
        content = f.read()
    
    new_content = content
    for old_cls, new_cls in active_map.items():
        # Replace exact word matches. JSX classNames are usually separated by spaces.
        # We use negative lookbehind/lookahead to ensure it's not part of another word.
        new_content = re.sub(r'(?<![A-Za-z0-9\-_])' + old_cls + r'(?![A-Za-z0-9\-_])', new_cls, new_content)
        
    if new_content != content:
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Updated {file}")

# 2. Update CSS files
for file in css_files:
    with open(file, "r") as f:
        content = f.read()
    
    new_content = content
    for old_cls, new_cls in active_map.items():
        # Replace exact class selectors ._Class
        # Need to escape old_cls since it starts with underscore but underscore is fine.
        new_content = re.sub(r'\.' + old_cls + r'(?![A-Za-z0-9\-_])', '.' + new_cls, new_content)
        
    if new_content != content:
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Updated {file}")

print("Rename complete.")
