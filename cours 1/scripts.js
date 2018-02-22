//Hoisting de variables
var x;
console.log(x);

var x = 5; // Message undefined. Javascript à pris lors de ça première lecture, la variable x (la déclaration de la variable)mais attention ! Pas ça valeur
/* Dans ce commit on voit ce qu'a réellement fait javascript. il à déclaré x, 
il affiche x dans la console, et seulement après il voit la valeur de x. 
C'est pour cela que le console.log dit undefined*/