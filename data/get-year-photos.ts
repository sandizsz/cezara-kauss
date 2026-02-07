import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export function getYearPhotos(year: number): string[] {
  const dir = path.join(process.cwd(), "public", "images", "vesture", String(year));

  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/images/vesture/${year}/${f}`);
  } catch {
    return [];
  }
}
