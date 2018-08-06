'use strict';

const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

const readline = require('readline');

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
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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

const jeu = new Jeu();
jeu.jouer();
