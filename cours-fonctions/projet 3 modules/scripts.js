// fonction de type IIFEs

(function nomFonction() {
    //code de la fonction
    var myName = "Ricardo";
})();
/* Les variables déclarées dans une fonction de type IIFEs restent à l'intérieur
du scope de la fonction et ne sont pas connues du reste du code. Elles sont donc privées*/
console.log(myName); // Résultat: MyName is not defined