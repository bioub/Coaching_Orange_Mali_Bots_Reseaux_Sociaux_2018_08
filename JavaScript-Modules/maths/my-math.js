// Node.js créé automatique une fonction pour créer une portée
// au niveau du fichier
// (function (exports, require, module, __filename, __dirname) {

const convertToNumber = (val) => Number(val);

const sum = (a, b) => convertToNumber(a) + convertToNumber(b);
const substract = (a, b) => a - b;

exports.sum = sum;
exports.substract = substract;

// });
