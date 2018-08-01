const nbs = [2, 3, 4, 5];

// Fonctions qui remplace un algo (programmation fonctionnelle)
// Algo : Afficher le carré des nombres pairs du tableau
nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb) => console.log(nb));

console.log('Fin');

// pile d'appel de fonctions
// ^
// |
// |                      log log
// |=> => => =>   => =>   =>  =>
// |filter      - map   - forEach - log
// +----------------------------------------------> temps (pas à l'échelle)
// sortie:                4   16    Fin
