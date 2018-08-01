/*let compteur = 0;

setTimeout(function() {
  console.log('A');
  compteur++;

  if (compteur === 3) {
    console.log('Done');
  }
}, Math.random() * 1000);

setTimeout(function() {
  console.log('B');
  compteur++;

  if (compteur === 3) {
    console.log('Done');
  }
}, Math.random() * 1000);

setTimeout(function() {
  console.log('C');
  compteur++;

  if (compteur === 3) {
    console.log('Done');
  }
}, Math.random() * 1000);
*/

function axios(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, Math.random() * 1000)
  });
}

// Promise.all permet d'exécuter du code quand les 3 promesses sont terminées
Promise.all([
  axios('A'),
  axios('B'),
  axios('C'),
]).then((valeurs) => {
  console.log(valeurs);
  console.log('Done');
});

/*
console.log(['a', 'b', 'c'].map((elt) => elt.toUpperCase()));
*/
/*
const tab = ['a', 'b', 'c'];
const newTab = [];

for (const elt of tab) {
  newTab.push(elt.toUpperCase());
}
*/
