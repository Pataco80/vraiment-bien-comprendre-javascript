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
    var myName = "Ricardo";
    var myPassword = "12345";
    var anneNaissance = 1980;
    var monAge = calculAge(anneNaissance);

    function setPassword(newPassword) {
        myPassword = newPassword;
    }

    function getPassword() {
        return myPassword;
    }

    function calculAge(anneNaissance) {
        var date = new Date().getFullYear();
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