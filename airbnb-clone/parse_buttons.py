import re

with open('src/App.jsx', 'r') as f:
    content = f.read()

share_btn = re.search(r'<button className="_EmrQRK" type="button" id="shareBtn".*?</button>', content)
if share_btn:
    print("Found Share button:", share_btn.group(0)[:100] + "...")

save_btn = re.search(r'<button className="_EmrQRK [^"]*" type="button" id="saveBtn".*?</button>', content)
if save_btn:
    print("Found Save button:", save_btn.group(0)[:100] + "...")

