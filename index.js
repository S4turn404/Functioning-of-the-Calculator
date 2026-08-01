

function quadratic(a,b,c) {
    var z = (b*b) - 4*a*c;
    var x = Math.sqrt(Math.abs(z));
    var y = x/2*a;
    return y
}

function pythagorean(a,b) {
    var c = Math.sqrt((a*a) + (b*b));
    return c
}




console.log(quadratic(1,2,10))

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