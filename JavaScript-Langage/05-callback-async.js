setTimeout(() => console.log('A'), 0);
setTimeout(() => console.log('B'), 300);
setTimeout(() => console.log('C'), 200);
setTimeout(() => console.log('D'), 200);

console.log('Fin');

// pile d'appel de fonctions
// ^
// |
// |
// |                                            log('A')              log('C') log('D')               log('B')
// |st - st - st - st - log('Fin') .....⟳...... =>      .....⟳...... =>       =>       .....⟳...... =>
// +--0ms----------------------------------------3ms------------------200ms----201ms------------------300ms-----> temps (pas à l'échelle)
// sortie:              Fin                     A                     C        D                      B
// file d'attente (0ms) : () => console.log('A')
// file d'attente (3ms) :
// file d'attente (200ms) : () => console.log('C') | () => console.log('D')
// file d'attente (201ms) : () => console.log('D')
// file d'attente (202ms) :
// file d'attente (300ms) : () => console.log('B')
// file d'attente (301ms) :
// fin du programme
