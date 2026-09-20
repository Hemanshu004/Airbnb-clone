import json
import re

with open("src/class_contexts.json", "r") as f:
    data = json.load(f)

rename_map = {}
counters = {}

def slugify(text):
    text = re.sub(r'[^a-zA-Z0-9]', '-', text.lower())
    text = re.sub(r'-+', '-', text)
    return text.strip('-')

for cls, contexts in data.items():
    if not contexts or contexts[0] == "UNUSED IN JSX":
        rename_map[cls] = f"unused-{cls.lower()}"
        continue
    
    comp_name = "shared"
    ctx = contexts[0]
    
    # prefer contexts not from App.backup if possible
    for c in contexts:
        if not c.startswith("[App.backup]"):
            ctx = c
            cm = re.search(r'\[(.*?)\]', c)
            if cm:
                comp_name = cm.group(1).lower()
                break
    else:
        cm = re.search(r'\[(.*?)\]', ctx)
        if cm:
            comp_name = cm.group(1).lower().replace('.backup', '')

    tag_match = re.search(r'<([a-zA-Z0-9]+)', ctx)
    tag_name = tag_match.group(1) if tag_match else "element"
    
    semantic_hint = ""
    
    # 1. aria-label
    aria_match = re.search(r'aria-label="([^"]+)"', ctx)
    if aria_match:
        semantic_hint = slugify(aria_match.group(1))
    
    # 2. id
    if not semantic_hint:
        id_match = re.search(r'id="([^"]+)"', ctx)
        if id_match:
            semantic_hint = slugify(id_match.group(1))
            
    # 3. Text content
    if not semantic_hint:
        text_match = re.search(r'>([^<]+)</', ctx)
        if text_match:
            text = text_match.group(1).strip()
            # Only use very short text as a semantic hint (e.g. "Reserve", "Show all photos")
            if text and len(text) < 30 and "{" not in text: 
                semantic_hint = slugify(text)
    
    if semantic_hint:
        base_name = f"{comp_name}-{semantic_hint}"
    else:
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
