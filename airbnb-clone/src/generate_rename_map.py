import json
import re

with open("src/class_contexts.json", "r") as f:
    data = json.load(f)

rename_map = {}
counters = {}

for cls, contexts in data.items():
    if not contexts or contexts[0] == "UNUSED IN JSX":
        rename_map[cls] = f"unused-{cls.lower()}"
        continue
    
    # Try to find the actual component, ignoring App.backup if possible
    comp_name = "shared"
    ctx = contexts[0]
    for c in contexts:
        if not c.startswith("[App.backup]"):
            cm = re.search(r'\[(.*?)\]', c)
            if cm:
                comp_name = cm.group(1)
                ctx = c
                break
    
    # Try to extract tag name e.g. <div or <button
    tag_match = re.search(r'<([a-zA-Z0-9]+)', ctx)
    tag_name = tag_match.group(1) if tag_match else "element"
    
    comp_name = comp_name.lower().replace('.jsx', '')
    
    base_name = f"{comp_name}-{tag_name}"
    
    if base_name not in counters:
        counters[base_name] = 1
        rename_map[cls] = base_name
    else:
        counters[base_name] += 1
        rename_map[cls] = f"{base_name}-{counters[base_name]}"

with open("src/rename_map.json", "w") as f:
    json.dump(rename_map, f, indent=2)

print("Generated src/rename_map.json")
