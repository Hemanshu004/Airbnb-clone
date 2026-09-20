import re
import glob

# Get all jsx files
jsx_files = glob.glob('src/**/*.jsx', recursive=True)

# Get all CSS classes
with open("src/index.css", "r") as f:
    css_content = f.read()
    
unique_classes = sorted(list(set(c[1:] for c in re.findall(r"\._[A-Za-z0-9]+", css_content))))

class_contexts = {c: [] for c in unique_classes}

for file in jsx_files:
    with open(file, "r") as f:
        content = f.read()
    
    # Find components / tags
    lines = content.split('\n')
    for i, line in enumerate(lines):
        for c in unique_classes:
            if re.search(r'\b' + c + r'\b', line):
                comp_name = file.split('/')[-1].replace('.jsx', '')
                class_contexts[c].append(f"[{comp_name}] {line.strip()[:80]}")

import json

result = {}
for c in unique_classes:
    if class_contexts[c]:
        ctxs = list(set(class_contexts[c]))
        result[c] = ctxs
    else:
        result[c] = ["UNUSED IN JSX"]

with open("src/class_contexts.json", "w") as f:
    json.dump(result, f, indent=2)

print("Created src/class_contexts.json")
