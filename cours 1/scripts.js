/* function addition(a, b) {
    console.log(a + b);
} */

var addition = function(a, b) {
    console.log(a + b);
}; // fonction anonyme dans une variable cela ne fonctionne pas.

addition(5, 7); // Dans cet ordre le code fonctionne car javascript hisse les déclarations de fonctions en haut