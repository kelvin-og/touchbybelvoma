/**
 * Post-build script for GitHub Pages deployment.
 *
 * Copies the static SPA output (dist/) to:
 *   - docs/   (served when GitHub Pages source is set to main / docs)
 *   - root    (served when GitHub Pages source is set to main / root)
 *
 * Adds 404.html so that deep-linking / page-refresh works on GitHub Pages
 * (the 404 page is served for any unknown path, and the SPA router takes over).
 */
import {
  readdirSync,
  copyFileSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  existsSync,
  rmSync,
} from "fs";
import { join } from "path";

const src = "dist";
const dest = "docs";

if (!existsSync(src)) {
  console.error(`❌ Build output not found at "${src}". Run "npm run build:static" first.`);
  process.exit(1);
}

// Recursively copy a directory
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

// Wipe stale build artifacts from previous runs
if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
if (existsSync("assets")) rmSync("assets", { recursive: true, force: true });

// Copy dist/ → docs/
copyDir(src, dest);

// Copy dist/ → repo root (GitHub Pages "main / (root)" source)
copyDir(src, ".");

// Read the generated index.html (Vite already wrote the correct asset hashes)
const indexHtml = readFileSync(join(dest, "index.html"), "utf8");

// Copy index.html as 404.html so the SPA router handles all deep links
writeFileSync(join(dest, "404.html"), indexHtml);
writeFileSync("404.html", indexHtml);

// Ensure GitHub Pages doesn't run Jekyll (which would break asset paths)
writeFileSync(join(dest, ".nojekyll"), "");
writeFileSync(".nojekyll", "");

console.log("✅ Deployed: root + docs/ with Vite-generated index.html + 404.html");
