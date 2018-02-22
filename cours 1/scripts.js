// Undefined
var a;
console.log(a);

// Null
var selectedObject = { name: "Ricardo" }; // l'objet selectedObject est un tableau clé: valeur
console.log(selectedObject); // J'affiche le tableau
selectedObject = null; // Je dis que selectedObject ne vaut plus rien... manuellement fait par moi
console.log(selectedObject); // J'ai dit que selectedObject ne vaut rien et la console affiche null

// Is not defined

console.log(b); // la variable b n'existe pas cela fera un message qu'il y a une erreur is not defined. La variable n'a jamais été déclarée comparé à undefined plus haut