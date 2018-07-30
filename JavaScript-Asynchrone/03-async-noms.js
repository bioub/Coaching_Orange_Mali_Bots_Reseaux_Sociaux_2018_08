const fs = require('fs');

const fileSrcPath = './source.txt';
const fileDestPath = './dest.txt';

function onFileRead(err, buffer) {
  if (err) return console.log(err);
  fs.writeFile(fileDestPath, buffer, onFileWritten);
}

function onFileWritten(err) {
  if (err) return console.log(err);
  console.log('Done');
}

fs.readFile(fileSrcPath, onFileRead);

