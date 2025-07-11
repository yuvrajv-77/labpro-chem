// rename-pdfs.mjs

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Emulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Read and parse the JSON file manually
const jsonPath = path.join(__dirname, "src", "data", "coa_list1.json");
const rawData = fs.readFileSync(jsonPath, "utf-8");
const certificates = JSON.parse(rawData);

// ✅ PDF directory
const pdfDir = path.join(__dirname, "public", "pdfs", "coa");

certificates.forEach((cert) => {
  const itemName = cert.ItemName.trim().replace(/\s+/g, " ");
  const originalFilePath = path.join(pdfDir, `${itemName}.pdf`);
  const newFilePath = path.join(pdfDir, `${cert.CatalogueNumber}.pdf`);

  try {
    if (fs.existsSync(originalFilePath)) {
      fs.renameSync(originalFilePath, newFilePath);
      console.log(`✅ Renamed: "${itemName}.pdf" → "${cert.CatalogueNumber}.pdf"`);
    } else {
      console.warn(`❌ File not found: "${itemName}.pdf"`);
    }
  } catch (err) {
    console.error(`❌ Error renaming "${itemName}.pdf":`, err.message);
  }
});
