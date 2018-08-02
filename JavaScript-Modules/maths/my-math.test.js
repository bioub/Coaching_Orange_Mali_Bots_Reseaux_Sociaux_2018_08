// Node.js créé automatique une fonction pour créer une portée
// au niveau du fichier
// Cette fonction s'appelle un "Module JavaScript"
// Ce système de Module de Node.js s'appelle "Module CommonJS"
// (function (exports, require, module, __filename, __dirname) {

const assert = require('assert'); // fichier dans le programme Node.js
const chalk = require('chalk'); // installé avec npm install chalk
const myMath = require('./my-math'); // fichier qu'on a créé (./ ou ../ obligatoire)

try {
  assert.strictEqual(myMath.sum(1, 2), 5);
  assert.strictEqual(myMath.substract(2, 1), 1);
  console.log(chalk.green('my-math.test.js success'));
}
catch (err) {
  console.log(chalk.red('my-math.test.js fail'));
}

// });


