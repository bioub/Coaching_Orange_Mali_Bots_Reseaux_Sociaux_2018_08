const fs = require('fs-extra');

const fileSrcPath = './source.txt';
const fileDestPath = './dest.txt';

fs.readFile(fileSrcPath)
  .then((buffer) => fs.writeFile(fileDestPath, buffer))
  .then(() => console.log('Done'))
  .catch((err) => console.log(err));
