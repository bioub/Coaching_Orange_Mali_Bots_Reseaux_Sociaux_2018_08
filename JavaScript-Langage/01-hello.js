// @ts-check
const nbs = [1, 2, 3, 4];
let total = 0;

/**
 * Additionne 2 paramètres
 * @param {number} a Le premier paramètre
 * @param {number} b Le second paramètre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

for (const nb of nbs) {
  total = sum(total, nb);
}

console.log('Total', total);
