/*
(function() {
    var myPassword = "00000";
}());
*/

// Dans un scope de bloc avec une variable const ou let, cela fait la même chose.
// Attention ! Ne pas utiliser le var car sinon il y a hoisting 
{
    let myPassword = "00000";

}