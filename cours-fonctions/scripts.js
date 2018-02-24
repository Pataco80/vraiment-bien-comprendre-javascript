/*
function myFunction() {
    return function(number) {
        return number * 2;
    };
}

const retFunction = myFunction();
console.log(myFunction);
console.log("-------------------------------");
console.log(myFunction());
console.log("-------------------------------");
console.log(myFunction()(4));
console.log("-------------------------------");
console.log(retFunction);
console.log("-------------------------------");
console.log(retFunction(10));
*/

// Les Closures

function multyplayBy(number) {
    const closedVariable = number;

    return function(annotherNumber) {
        return closedVariable * annotherNumber;
    };
}