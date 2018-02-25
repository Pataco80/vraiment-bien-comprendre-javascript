/*
const getPassword = (function() {
    var myPassword = "12345";

    function setPassword(newPassword) {
        myPassword = newPassword;
    }

    return function() {
        return myPassword;
    }
}());
*/

// Dans cet état, tout le module à été rendu privé. La IIFEs à été insérée dans une variable.
/*Une fois cette execution effectuée, getPassword stockera la valeur retournée dans la fonction annonyme le "myPassword",
celle-ci sera donc connue dans le reste du code*/


// Externalisation de plusieurs variables
const module1 = (function() {
    const myName = "Ricardo";
    let myPassword = "12345"; // Une erreur à la ligne 28 apparait si je met un const
    const anneNaissance = 1980;
    const monAge = calculAge(anneNaissance);

    function setPassword(newPassword) {
        myPassword = newPassword;
    }

    function getPassword() {
        return myPassword;
    }

    function calculAge(anneNaissance) {
        const date = new Date().getFullYear();
        age = date - anneNaissance;
        return age;
    }

    return {
        myName: myName,
        anneNaissance: anneNaissance,
        monAge: monAge,
        getPassword: getPassword
    };
}());