import re

with open("src/App.jsx", "r") as f:
    text = f.read()

imgs = list(re.finditer(r"<img[^>]*>", text))
for i, m in enumerate(imgs):
    start = max(0, m.start() - 30)
    end = min(len(text), m.end() + 30)
    context = text[start:end].replace('\n', ' ')
    print(f"[{i}]: {context}")

