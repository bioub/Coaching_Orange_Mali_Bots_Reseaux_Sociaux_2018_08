'use strict';

const readline = require('readline');
const random = require('./random');

class Jeu {
  constructor(options = {}) {
    let min = 0;
    let max = 100;

    if (options.min !== undefined) {
      min = options.min;
    }

    if (options.max !== undefined) {
      max = options.max;
    }

    this.rl = readline.createInterface(process.stdin, process.stdout);
    this.entierAlea = random.getIntInclusive(min, max);
    this.essais = [];
  }

  jouer() {
    if (this.essais.length) {
      console.log(`Vous avez déjà joué : ${this.essais.join(' - ')}`);
    }

    this.rl.question('Quel est le nombre entier ? ', (answer) => {
      const entierSaisi = parseInt(answer);

      if (isNaN(entierSaisi)) {
        console.log('Erreur : il faut jouer un nombre');
        return this.jouer();
      }

      this.essais.push(entierSaisi);

      if (entierSaisi < this.entierAlea) {
        console.log('Trop petit');
        return this.jouer();
      }

      if (entierSaisi > this.entierAlea) {
        console.log('Trop grand');
        return this.jouer();
      }

      console.log('Gagné');
      this.rl.close();
    });
  }
}

// si plusieurs valeurs exportées
// exports.Jeu = Jeu;

// si une seule valeur exportée
module.exports = Jeu;
