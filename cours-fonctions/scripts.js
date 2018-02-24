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

function multiplyBy(number) {
    const closedVariable = number;

    return function(annotherNumber) {
        return closedVariable * annotherNumber;
    };
}
const multiplyByFive = multiplyBy(5);

console.log(multiplyBy());
console.log("-------------------------------");
console.log(multiplyByFive(2));
console.log("-------------------------------");
console.log(multiplyByFive(3));