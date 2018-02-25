(function() {
    var myPassword = "12345";

    function setPassword(newPassword) {
        myPassword = newPassword;
    }

    function getPassword() {
        return myPassword;
    }
}()); // Dans cet état, tout le module à été rendu privé. 

// Fin du code