import { mkdirSync, renameSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const assetsDir = join(root, "public", "assets");
const videosDir = join(root, "public", "videos");

mkdirSync(assetsDir, { recursive: true });
mkdirSync(videosDir, { recursive: true });

for (const f of readdirSync(root)) {
  if (/\.(jpg|jpeg|png|webp)$/i.test(f)) {
    renameSync(join(root, f), join(assetsDir, f));
    console.log("→ assets/", f);
  } else if (/\.(mp4|mov)$/i.test(f)) {
    const target = join(videosDir, "hero.mp4");
    if (existsSync(target)) continue;
    renameSync(join(root, f), target);
    console.log("→ videos/hero.mp4 (from", f + ")");
  }
}
console.log("done.");
