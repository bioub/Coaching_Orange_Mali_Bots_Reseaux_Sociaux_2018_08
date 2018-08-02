// En JS on manipule souvent des objets sans avoir à les créer
// Exemples :
console.log('typeof Math', typeof Math); // object (défini par le langage JS)
console.log('typeof process', typeof process); // object (défini par Node.js)
console.log('typeof console', typeof console); // object (défini par les navigateurs et Node.js)
console.log('typeof document', typeof document); // undefined (défini par les navigateurs)

// Les objets JavaScript sont des dictionnaires (systèmes clé/valeur)
// équivalent en Java aux Map

console.log('typeof Math.sum', typeof Math.sum); // undefined

// Ajouter des clés/valeurs (mauvaise d'étendre les objets prédéfini)
Math.sum = (a, b) => a + b;
console.log('typeof Math.sum', typeof Math.sum); // function

// Modifier des clés/valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log('typeof Math.sum', typeof Math.sum); // function

// Supprimer des clés/valeurs
delete Math.sum;
console.log('typeof Math.sum', typeof Math.sum); // undefined


// On peut créer ses propres objet en JavaScript

// object litéral, cas d'utilisations :
// - object mono instance
// - multi instance très simple à créer (sans méthode / pas de type)

// mono-instance
const myMath = {
  sum: (a, b) => Number(a) + Number(b),
  substract: (a, b) => a - b,
};

console.log(myMath.sum(1, 2)); // 3
console.log(myMath.substract(2, 1)); // 1
console.log(myMath.substract(2, 1)); // 1

// multi-instance très simple à créer (sans méthode / pas de type)
const coordsA = {
  x: 10,
  y: 20,
};

const coordsB = {
  x: 20,
  y: 30,
};

// pas de type
// console.log(coordsA instanceof Coords); // false
console.log(coordsA instanceof Object); // true
// comme en Java on hérite au plus niveau de Object



// constructor function, (ressemble aux classes en Java) cas d'utilisations :
// multi-instance (avec méthode et type)

function Contact(prenom) {
  // propriétés
  this.prenom = prenom;
}

// méthodes de l'instance/objet (tous les objets Contact pourront appeler la méthode)
Contact.prototype.hello = function() {
  return "Bonjour je m'appelle " + this.prenom;
};

// méthode de la classe/statique
Contact.getClass = function() {
  return "Contact";
};

const romain = new Contact('Romain');
console.log('typeof romain', typeof romain); // object
console.log('romain.prenom', romain.prenom); // Romain
console.log('romain.hello()', romain.hello()); // Bonjour je m'appelle Romain
console.log('Contact.getClass()', Contact.getClass()); // Bonjour je m'appelle Romain

const fatou = new Contact('Fatou');
console.log('fatou.prenom', fatou.prenom); // Fatou
console.log('fatou.hello()', fatou.hello()); // Bonjour je m'appelle Fatou

// les fonctions en JS sont également des objets (donc des références)
console.log(romain.hello === fatou.hello); // true
