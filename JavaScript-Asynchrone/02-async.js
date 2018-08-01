const fs = require('fs');

const fileSrcPath = './source.txt';
const fileDestPath = './dest.txt';

// callback hell / pyramid of doom
fs.readFile(fileSrcPath, (err, buffer) => {
  if (err) return console.log(err);
  
  fs.writeFile(fileDestPath, buffer, (err) => {
    if (err) return console.log(err);
    console.log('Done');
  });

});



console.log('After ReadFile');


// pile d'appel de fonctions
// ^
// |
// |
// |                                         writeFile                   log
// |require - readFile - log ............... =>        ................. =>
// +-----------------------------------------------------------------------> temps (pas à l'échelle)
// sortie:               After ReadFile                                  Done