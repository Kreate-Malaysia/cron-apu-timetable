import sharp from "sharp";
import fs from "fs";
import path from "path";

const sourceDir = "public";

function convertToWebP(filePath) {
  const outputFilePath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  sharp(filePath)
    .toFormat("webp")
    .toFile(outputFilePath)
    .then(() => {
      console.log(`Converted: ${outputFilePath}`);
    })
    .catch((err) => {
      console.error(`Error converting ${filePath}: ${err}`);
    });
}

function shouldConvertFile(filePath) {
  const outputFilePath = filePath.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  return !fs.existsSync(outputFilePath);
}

function processDirectory(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, entries) => {
    if (err) {
      console.error(`Error reading directory ${directory}: ${err}`);
      return;
    }

    entries.forEach((entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        processDirectory(fullPath);
      } else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) {
        if (shouldConvertFile(fullPath)) {
          convertToWebP(fullPath);
        } else {
          console.log(
            `WebP already exists for ${fullPath}, skipping conversion.`,
          );
        }
      }
    });
  });
}

processDirectory(sourceDir);
