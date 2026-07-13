import os
import glob
import json

pub = ".output/public"
assets_dir = os.path.join(pub, "assets")

# Find entry files
js_files = sorted(glob.glob(os.path.join(assets_dir, "index-*.js")))
css_files = sorted(glob.glob(os.path.join(assets_dir, "styles-*.css")))
proxy_files = sorted(glob.glob(os.path.join(assets_dir, "proxy-*.js")))
jsx_files = sorted(glob.glob(os.path.join(assets_dir, "jsx-runtime-*.js")))
routes_files = sorted(glob.glob(os.path.join(assets_dir, "routes-*.js")))

js_entry = os.path.basename(js_files[0]) if js_files else ""
css_entry = os.path.basename(css_files[0]) if css_files else ""
proxy_entry = os.path.basename(proxy_files[0]) if proxy_files else ""
jsx_entry = os.path.basename(jsx_files[0]) if jsx_files else ""
routes_entry = os.path.basename(routes_files[0]) if routes_files else ""

print(f"JS:     {js_entry}")
print(f"CSS:    {css_entry}")
print(f"Proxy:  {proxy_entry}")
print(f"JSX:    {jsx_entry}")
print(f"Routes: {routes_entry}")

# Build preload links for key chunks
preloads = ""
for fname in [proxy_entry, jsx_entry, routes_entry]:
    if fname:
        preloads += f'\n    <link rel="modulepreload" href="./assets/{fname}" />'

css_tag = f'<link rel="stylesheet" crossorigin href="./assets/{css_entry}">' if css_entry else ""
js_tag = f'<script type="module" crossorigin src="./assets/{js_entry}"></script>' if js_entry else ""

html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Touch by Bel'voma | Luxury Jewelry in Ghana</title>
    <meta name="description" content="Luxury handcrafted gold-plated jewelry. Shop earrings, necklaces, rings, bracelets in Ghana." />
    <link rel="icon" href="./favicon.png" />
    {css_tag}{preloads}
    {js_tag}
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
"""

index_path = os.path.join(pub, "index.html")
not_found_path = os.path.join(pub, "404.html")

with open(index_path, "w") as f:
    f.write(html)
with open(not_found_path, "w") as f:
    f.write(html)
open(os.path.join(pub, ".nojekyll"), "w").close()

print(f"\nCreated index.html + 404.html + .nojekyll")
print("\n--- index.html ---")
print(html)
