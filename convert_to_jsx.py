import re

def style_to_react(match):
    style_str = match.group(1)
    # Split by semicolon
    declarations = style_str.split(';')
    react_style = []
    for decl in declarations:
        if not decl.strip():
            continue
        parts = decl.split(':', 1)
        if len(parts) == 2:
            key = parts[0].strip()
            val = parts[1].strip()
            # Convert key to camelCase
            parts_key = key.split('-')
            camel_key = parts_key[0] + ''.join(word.capitalize() for word in parts_key[1:])
            # Value should be quoted, but if it has single quotes, escape them or use double quotes
            # For simplicity, use single quotes and escape them
            val = val.replace("'", "\\'")
            react_style.append(f"{camel_key}: '{val}'")
    
    style_obj = "{" + ", ".join(react_style) + "}"
    return f"style={{{style_obj}}}"

def html_to_jsx(html):
    # Extract root div
    root_match = re.search(r'<div id="root">.*?</div>\s*<script', html, re.DOTALL)
    if not root_match:
        root_match = re.search(r'<div id="root">.*</div>', html, re.DOTALL)
        if not root_match:
            print("Root div not found!")
            return ""
        content = root_match.group(0)
    else:
        content = root_match.group(0).replace('<script', '')
        # remove the last part if it matched <script
        
    # Manual extraction: Let's just find everything between <body ...> and <script
    body_match = re.search(r'<body[^>]*>(.*?)<script', html, re.DOTALL)
    if body_match:
        content = body_match.group(1)
    
    # Remove inline style tags that might have been captured
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
    
    # 1. class -> className
    content = re.sub(r'\bclass=', 'className=', content)
    
    # 2. for -> htmlFor
    content = re.sub(r'\bfor=', 'htmlFor=', content)
    
    # 3. SVG and other attributes to camelCase
    attrs = [
        "fill-rule", "clip-rule", "stroke-width", "stroke-linecap", 
        "stroke-linejoin", "tabindex", "autocomplete", "autofocus",
        "stroke-dasharray", "stroke-dashoffset", "stroke-miterlimit",
        "stop-color", "stop-opacity"
    ]
    for attr in attrs:
        parts = attr.split('-')
        if len(parts) == 1:
            camel = attr
        else:
            camel = parts[0] + ''.join(w.capitalize() for w in parts[1:])
        # Special cases like tabindex
        if attr == "tabindex": camel = "tabIndex"
        if attr == "autocomplete": camel = "autoComplete"
        if attr == "autofocus": camel = "autoFocus"
        
        content = re.sub(r'\b' + attr + r'=', camel + '=', content)
        
    # 4. Inline styles
    content = re.sub(r'style="([^"]*)"', style_to_react, content)
    
    # 5. Void elements closing
    void_elements = ['img', 'input', 'br', 'hr', 'meta', 'link']
    for tag in void_elements:
        # Match <tag ... > but not <tag ... />
        # This regex is simplistic but usually works for generated HTML
        content = re.sub(r'<(' + tag + r'\b[^>]*?)(?<!/)>', r'<\1 />', content)
        
    # Ensure there are no <!-- ... --> comments that cause issues in JSX?
    # JSX comments are {/* ... */}
    content = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', content, flags=re.DOTALL)
    
    # wrap in a component
    jsx = """import React from 'react';
import './index.css';

export default function App() {
  return (
    <>
      %s
    </>
  );
}
""" % content
    return jsx

if __name__ == "__main__":
    with open("Romantic Jacuzzi 1BHK Candolim _ Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb.html", "r") as f:
        html = f.read()
    
    jsx = html_to_jsx(html)
    
    with open("airbnb-clone/src/App.jsx", "w") as f:
        f.write(jsx)
    print("Conversion complete.")
