// scripts/generateGallery.js
import { readdirSync, writeFileSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

// __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, "..");

const galleryDir = join(__dirname, "../public/images/gallery");
const outputFile = join(__dirname, "../public/gallery.json");

const files = readdirSync(galleryDir).filter(file =>
  /\.(png|jpe?g|gif|webp)$/i.test(file)
);

writeFileSync(outputFile, JSON.stringify(files, null, 2));

console.log("✅ Gallery JSON generated:", files.length, "images");
