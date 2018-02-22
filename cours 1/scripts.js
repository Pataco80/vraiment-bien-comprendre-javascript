// let
let a;
let b;
a = { name: "Pilou" };
b = a;
b = { name: "Zouzou" };
console.log(a);
console.log(b);
// Le let fonctionne similairement comme le var



// Const
// On peut faire comme cela pour l'utilisation et modification d'une constante.
const x = {
    name: "Ricardo"
};
x.name = "Natacha";
console.log(x);

/* On ne peux pas écrire ce qui est la dessous car const nécéssite une valeur
attribuée dès le début. Ci dessous, ça ne fonctionne pas, on ne peut pas assigner
une autre valeur à la constante "c"
*/
const c = 22;
c = "55";
/* message d'erreur: Uncaught TypeError: Assignment to constant variable.
at scripts.js: 19 */
console.log(c);
/* On ne peut pas assigner un nouvel objet ou valeur à une constante, mais on peut modifier une des propriétés
Attention pas de hoisting avec let et const
*/

/* L'utilisation à l'avenir 
1 - Ne plus utiliser var

2 - Toujours utiliser const

3 - Si on réassigne une valeur à la variable on utilise le let
*/