// TODO à déplacer dans random.js
function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1)) + min;
}

// random.getRandomIntInclusive();

const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

function jouer() {
  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' - '));
  }

  rl.question('Quel est le nombre entier ? ', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut jouer un nombre');
      return jouer();
    }

    essais.push(entierSaisi);

    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné');
    rl.close();
  });
}

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];
jouer();

/*
const str = 'Hello';
str = str + ' ! '; // erreur

const tab = [];
tab.push('Hello'); // ok

const obj = {};
obj.prenom = 'Romain'; // ok
*/

// pile d'appel de fonctions
// ^
// |                                                  question               question
// |                            question              jouer                  jouer
// |require - createInterface - jouer    ............ =>        ............ =>
// +---------------------------------------------------------------ENTREE-----------------ENTREE--> temps (pas à l'échelle)
// sortie:
