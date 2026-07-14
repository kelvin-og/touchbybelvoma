import {
  readdirSync,
  copyFileSync,
  mkdirSync,
  writeFileSync,
  existsSync,
} from "fs";
import { join } from "path";

const src = "dist";
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

// Copy build output to docs/
copyDir(src, dest);

// Write .nojekyll so GitHub Pages serves assets correctly
writeFileSync(join(dest, ".nojekyll"), "");

// The 404.html redirect trick — on any unmatched path GitHub Pages serves 404.html.
// We copy index.html to 404.html so the SPA router can handle all routes client-side.
copyFileSync(join(dest, "index.html"), join(dest, "404.html"));

console.log("✅ docs/ built from dist/ with index.html, 404.html, .nojekyll");
console.log("Files in docs/:", readdirSync(dest).join(", "));
