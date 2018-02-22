var x = { name: "Ricardo" };
/* J'attribue l'objet contenant name: "Ricardo" à la variable x.
X va pointer vers un objet {name:"Ricardo"}, stocké dans la mémoire. Un peu comme un racourci que l'ont mets sur
le bureau qui pointe vers un programme.
La variable X va contenir le chemin d'accès vers l'objet créé. Un peu comme une addresse postale.
*/
var y = x; // Je stock dans la variable Y la valeur de X. X, contient comme valeur le chemin d'accès vers l'objet qui a été créé grâce à la variable X.
// Ci dessous je dis que Y contient un objet qui n'est pas le même que celui qui a été créé par X.
y = { name: "Natacha" };

console.log(x); // Il affichera un objet à la propriété,clé:valeur, name:"Ricardo".
console.log(y); // Il affichera un objet à la propriété,clé:valeur, name:"Natacha".
/* JavaScript lit le code de haut en bas. Y = X, mais juste dessous, je change la valeur de Y en affectant un chemin
pointant vers l'objet {name:"Natacha"}
Si on met le contenu de la ligne 6 juste avant les console.log, Y pointera dabord vers l'objet créé avec {name:"Natacha"}
puis pointera à nouveau vers l'Objet {name:"Ricardo"} */