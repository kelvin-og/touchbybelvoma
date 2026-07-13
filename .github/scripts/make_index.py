import os
import glob

pub = ".output/public"
assets_dir = os.path.join(pub, "assets")

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
    <div id="root"></div>
  </body>
</html>
"""

index_path = os.path.join(pub, "index.html")
not_found_path = os.path.join(pub, "404.html")
nojekyll_path = os.path.join(pub, ".nojekyll")

with open(index_path, "w") as f:
    f.write(html)

with open(not_found_path, "w") as f:
    f.write(html)

open(nojekyll_path, "w").close()

print(f"\nCreated: {index_path}")
print(f"Created: {not_found_path}")
print(f"Created: {nojekyll_path}")
print("\nFinal contents of .output/public:")
for item in sorted(os.listdir(pub)):
    print(f"  {item}")
print("\nindex.html preview:")
print(html[:500])
