const getPassword = (function() {
    var myPassword = "12345";

    function setPassword(newPassword) {
        myPassword = newPassword;
    }

    return function() {
        return myPassword;
    }
}()); // Dans cet état, tout le module à été rendu privé. 

// Fin du code