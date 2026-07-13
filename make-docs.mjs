import {
  readdirSync,
  copyFileSync,
  mkdirSync,
  writeFileSync,
  existsSync,
  rmSync,
} from "fs";
import { join } from "path";

const src = ".output/public";
const dest = "docs";

// Recursively copy directory
function copyDir(from, to) {
  if (!existsSync(to)) mkdirSync(to, { recursive: true });
  for (const entry of readdirSync(from, { withFileTypes: true })) {
    const srcPath = join(from, entry.name);
    const destPath = join(to, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

// Clean and rebuild docs/ to avoid stale hashed assets accumulating
if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}

// Clean and rebuild root assets/ to keep it in sync
if (existsSync("assets")) {
  rmSync("assets", { recursive: true, force: true });
}

// Copy build output to docs/
copyDir(src, dest);

// Copy build output to root (GitHub Pages serves index.html from main root)
copyDir(src, ".");

// Find entry files from freshly built assets
const assets = readdirSync(join(dest, "assets"));
const jsEntry =
  assets.find((f) => f.startsWith("index-") && f.endsWith(".js")) || "";
const cssEntry =
  assets.find((f) => f.startsWith("styles-") && f.endsWith(".css")) || "";
const proxyEntry =
  assets.find((f) => f.startsWith("proxy-") && f.endsWith(".js")) || "";
const jsxEntry =
  assets.find((f) => f.startsWith("jsx-runtime-") && f.endsWith(".js")) || "";
const routesEntry =
  assets.find((f) => f.startsWith("routes-") && f.endsWith(".js")) || "";

console.log("JS:", jsEntry, "| CSS:", cssEntry);

if (!jsEntry || !cssEntry) {
  console.error("❌ Missing entry files — build may have failed.");
  process.exit(1);
}

// Use relative paths so they work from any subpath (e.g. /touch-by-bel-voma/)
const preloads = [proxyEntry, jsxEntry, routesEntry]
  .filter(Boolean)
  .map((f) => `    <link rel="modulepreload" crossorigin href="assets/${f}" />`)
  .join("\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Touch by Bel'voma | Luxury Jewelry in Ghana</title>
    <meta name="description" content="Luxury handcrafted gold-plated jewelry. Shop earrings, necklaces, rings, bracelets and anklets in Ghana." />
    <link rel="icon" href="favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300..700&family=Poppins:wght@400;500;600&display=swap" />
    <link rel="stylesheet" crossorigin href="assets/${cssEntry}">
${preloads}
    <script type="module" crossorigin src="assets/${jsEntry}"></script>
  </head>
  <body>
  </body>
</html>
`;

// Write index.html and 404.html to both docs/ and root
for (const dir of [dest, "."]) {
  writeFileSync(join(dir, "index.html"), html);
  writeFileSync(join(dir, "404.html"), html);
  writeFileSync(join(dir, ".nojekyll"), "");
}

console.log("✅ Built: root + docs/ with index.html, 404.html, assets");
