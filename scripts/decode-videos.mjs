import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const sourceDir = path.join(root, 'video-base64');
const outputDir = path.join(root, 'public', 'media');

fs.mkdirSync(outputDir, { recursive: true });

for (const id of ['0771', '1918', '3192']) {
  const encoded = fs.readFileSync(path.join(sourceDir, `${id}.micro.txt`), 'utf8').trim();
  const output = path.join(outputDir, `img_${id}.mp4`);
  fs.writeFileSync(output, Buffer.from(encoded, 'base64'));
  console.log(`Generated ${path.relative(root, output)}`);
}
