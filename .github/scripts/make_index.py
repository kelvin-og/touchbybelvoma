import os
import glob
import re

pub = ".output/public"
assets_dir = os.path.join(pub, "assets")

# If prerendering generated an index.html, just add 404.html + .nojekyll
existing_index = os.path.join(pub, "index.html")
if os.path.exists(existing_index):
    print("Found prerendered index.html — using it directly")
    with open(existing_index, "r", encoding="utf-8") as f:
        html = f.read()
    # Rewrite absolute asset paths to work on GitHub Pages subpath
    # /assets/ -> ./assets/
    html = html.replace('href="/assets/', 'href="./assets/')
    html = html.replace('src="/assets/', 'src="./assets/')
    html = html.replace('href="/favicon', 'href="./favicon')
    with open(existing_index, "w", encoding="utf-8") as f:
        f.write(html)
    with open(os.path.join(pub, "404.html"), "w", encoding="utf-8") as f:
        f.write(html)
    open(os.path.join(pub, ".nojekyll"), "w").close()
    print("Done! Rewritten paths for GitHub Pages subpath.")
else:
    print("No prerendered index.html — generating bootstrap HTML")
    js_files = sorted(glob.glob(os.path.join(assets_dir, "index-*.js")))
    css_files = sorted(glob.glob(os.path.join(assets_dir, "styles-*.css")))
    js_entry = os.path.basename(js_files[0]) if js_files else ""
    css_entry = os.path.basename(css_files[0]) if css_files else ""
    print(f"JS  entry: {js_entry}")
    print(f"CSS entry: {css_entry}")
    css_tag = f'<link rel="stylesheet" crossorigin href="./assets/{css_entry}">' if css_entry else ""
    js_tag = f'<script type="module" crossorigin src="./assets/{js_entry}"></script>' if js_entry else ""
    html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Touch by Bel'voma | Luxury Jewelry in Ghana</title>
    <meta name="description" content="Luxury handcrafted gold-plated jewelry. Shop earrings, necklaces, rings and bracelets in Ghana." />
    <link rel="icon" href="./favicon.png" />
    {css_tag}
    {js_tag}
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
"""
    with open(existing_index, "w") as f:
        f.write(html)
    with open(os.path.join(pub, "404.html"), "w") as f:
        f.write(html)
    open(os.path.join(pub, ".nojekyll"), "w").close()

print("\nFinal .output/public contents:")
for item in sorted(os.listdir(pub)):
    print(f"  {item}")
