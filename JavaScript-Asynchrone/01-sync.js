const fs = require('fs');

const fileSrcPath = './source.txt';
const fileDestPath = './dest.txt';

try {
  const buffer = fs.readFileSync(fileSrcPath);
  fs.writeFileSync(fileDestPath, buffer);
  console.log('Done');
}
catch (err) {
  console.log(err);
}

// pile d'appel de fonctions
// ^
// |
// |
// |
// |require - (readFileSync - writeFileSync) - log
// +----------------------------------------------> temps (pas à l'échelle)
// sortie:                                     Done
