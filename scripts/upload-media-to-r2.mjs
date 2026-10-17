// Uploads every file in public/media to the R2 bucket used by the Worker.
// Usage: npx wrangler login  (once)  →  npm run upload:media
import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { extname, join } from "node:path";

const BUCKET = "royal-residency-images";
const DIR = "public/media";
const TYPES = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml" };

const files = readdirSync(DIR).filter((f) => TYPES[extname(f).toLowerCase()]);
for (const [i, file] of files.entries()) {
	console.log(`[${i + 1}/${files.length}] ${file}`);
	execFileSync(
		"npx",
		[
			"wrangler",
			"r2",
			"object",
			"put",
			`${BUCKET}/${file}`,
			"--file",
			join(DIR, file),
			"--content-type",
			TYPES[extname(file).toLowerCase()],
			"--remote",
		],
		{ stdio: "inherit" },
	);
}
console.log(`Uploaded ${files.length} files to r2://${BUCKET}`);
