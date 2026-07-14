import {
  readdirSync,
  copyFileSync,
  mkdirSync,
  writeFileSync,
  existsSync,
  rmSync,
  renameSync,
} from "fs";
import { join } from "path";

const src = "dist";
const dest = "docs";

// Clean and recreate docs/
if (existsSync(dest)) {
  rmSync(dest, { recursive: true, force: true });
}
mkdirSync(dest, { recursive: true });

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

// Copy build output (dist/) → docs/
copyDir(src, dest);

// Vite names the HTML output after the input filename.
// index.static.html → rename to index.html
const staticHtml = join(dest, "index.static.html");
const indexHtml = join(dest, "index.html");

if (existsSync(staticHtml)) {
  renameSync(staticHtml, indexHtml);
  console.log("✓ Renamed index.static.html → index.html");
} else if (!existsSync(indexHtml)) {
  throw new Error(
    "ERROR: Neither index.html nor index.static.html found in docs/. " +
    "Check that the static build ran successfully."
  );
}

// Copy index.html → 404.html so SPA routing works on direct URL access
copyFileSync(indexHtml, join(dest, "404.html"));

// .nojekyll prevents GitHub Pages from ignoring files starting with _
writeFileSync(join(dest, ".nojekyll"), "");

console.log("✅ docs/ ready: index.html, 404.html, .nojekyll, assets/");
console.log("Files in docs/:", readdirSync(dest).join(", "));
