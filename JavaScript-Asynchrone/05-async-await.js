const fs = require('fs-extra');

const fileSrcPath = './source.txt';
const fileDestPath = './dest.txt';

async function copy() {
  try {
    const buffer = await fs.readFile(fileSrcPath);
    await fs.writeFile(fileDestPath, buffer);
    console.log('Done');
  }
  catch (err) {
    console.log(err);
  }
}

copy();


/* avec await
fs.readFile(fileSrcPath)
  .then((buffer) => fs.writeFile(fileDestPath, buffer))
*/

/* sans await (on peut savoir quand le dernier a été lu)
fs.readFile(fileSrcPath1)
fs.readFile(fileSrcPath2)
*/
