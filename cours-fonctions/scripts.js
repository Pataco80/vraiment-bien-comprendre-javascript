// Création d'une fonction basique aditionnant 2 à l'argument.
function addTwo(number) {
    return number + 2;
}

// fonction executant 
function myFunction(argFunction, number2) {
    var x = argFunction(number2); // La variable x contiendra la fonction appelée lors de l'éxecution et le nombre associé
    console.log(x);
}

myFunction(addTwo, 5); // MyFunction utilisera executera la fonction addTwo et utilise le chiffre 5 pour additionner