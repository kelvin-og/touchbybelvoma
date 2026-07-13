import os
import glob

pub = ".output/public"
assets_dir = os.path.join(pub, "assets")

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

# gh-pages branch serves from root so use relative paths
preloads = ""
for fname in [proxy_entry, jsx_entry, routes_entry]:
    if fname:
        preloads += f'\n    <link rel="modulepreload" crossorigin href="/assets/{fname}" />'

css_tag = f'<link rel="stylesheet" crossorigin href="/assets/{css_entry}">' if css_entry else ""
js_tag = f'<script type="module" crossorigin src="/assets/{js_entry}"></script>' if js_entry else ""

fonts = '<link rel="preconnect" href="https://fonts.googleapis.com" />\n    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300..700&family=Poppins:wght@400;500;600&display=swap" />'

html = f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Touch by Bel'voma | Luxury Jewelry in Ghana</title>
    <meta name="description" content="Luxury handcrafted gold-plated jewelry. Shop earrings, necklaces, rings, bracelets and anklets in Ghana." />
    <link rel="icon" href="/favicon.png" />
    {fonts}
    {css_tag}{preloads}
    {js_tag}
  </head>
  <body>
  </body>
</html>
"""

for filename in ["index.html", "404.html"]:
    with open(os.path.join(pub, filename), "w") as f:
        f.write(html)
    print(f"Created: {filename}")

open(os.path.join(pub, ".nojekyll"), "w").close()
print("Created: .nojekyll")
print("\n--- index.html ---")
print(html)
