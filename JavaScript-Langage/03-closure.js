
function externe() {
  const local = 'local';
  function interne() {
    console.log('local interne', local); // local
  }
  console.log('local externe', local); // local
  interne();
}

console.log('typeof externe', typeof externe); // function
console.log('typeof interne', typeof interne); // undefined
console.log('local global', typeof local); // undefined
externe();

// pile d'appel de fonctions
// ^
// |
// |log
// |interne
// |externe
// +----------------------------------------------> temps (pas à l'échelle)
//  local




function closure(msg) {
  // Closure
  // msg est sauvegardé si on appelle interne plus tard
  // 2 conditions pour avoir une closure :
  // 1/ au moins 2 fonctions imbriquées
  // 2/ la fonction interne soit appelée en dehors (return, portée supérieure, objet, callback async)

  // si msg est volumeux, pour libérer la mémoire (Garbage Collector) :
  // msg = null;
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = closure('Hello');
helloFct(); // Hello
helloFct(); // Hello
// pile d'appel de fonctions
// ^
// |
// |
// |          log
// |closure - interne
// +----------------------------------------------> temps (pas à l'échelle)
//            local


function createTimeout(delay) {
  setTimeout(function onTimeout() {
    console.log(delay + 'ms expired');
  }, delay);
}

createTimeout(1000);
// pile d'appel de fonctions
// ^
// |
// |
// |setTimeout                             log
// |createTimeout(1000) .................. onTimeout
// +---------------------------------------1s-------> temps (pas à l'échelle)
// sortie:                                 1000ms expired
