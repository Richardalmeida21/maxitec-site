import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const source = path.join(root, 'public', 'media', 'logo-maxitec-user.webp.b64');
const output = path.join(root, 'public', 'media', 'logo-maxitec-user.webp');

const encoded = fs.readFileSync(source, 'utf8').trim();
fs.writeFileSync(output, Buffer.from(encoded, 'base64'));
console.log('Generated public/media/logo-maxitec-user.webp');
