

function calc(a,b,c) {
    var z = (b*b) - 4*a*c;
    console.log(z);
    var x = Math.sqrt(Math.abs(z));
    console.log(x);
    var y = x/2*a;
    return y
}

console.log(calc(1,2,10))

function add(a,b) {
    var sum = a+b
    return sum
}

function sub(a,b) {
    var dif = a-b
    return dif
}

function mult(a,b) {
    var prod = a*b
    return prod
}

function div(a,b) {
    var quo = a/b
    return quo
}

var a = 20
var b = 10

console.log(sub(a,b))
console.log(add(a,b))
console.log(mult(a,b))
console.log(div(a,b))