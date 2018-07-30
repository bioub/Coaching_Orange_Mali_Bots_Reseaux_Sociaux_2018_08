const fs = require('fs-extra');

const fileSrcPath = './source.txt';
const fileDestPath = './dest.txt';

async function copy() {
  const buffer = await fs.readFile(fileSrcPath);
  await fs.writeFile(fileDestPath, buffer);
  console.log('Done');
}

copy().catch((err) => console.log(err));
