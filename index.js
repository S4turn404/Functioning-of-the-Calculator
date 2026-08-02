

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

function circ_area(a) {
    var area = Math.PI * (a*a);
    return area
}

function circumference(a) {
    var circ = Math.PI *(2*a)
    return circ
}


function sin(a) {
    var s = Math.sin(a);
    return s
}

function cos(a) {
    var c = Math.cos(a);
    return c
}

function tan(a) {
    var t = Math.tan(a);
    return t
}

function log(a) {
    var l = Math.log(a);
    return l
}



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
console.log(quadratic(1,2,10))
console.log(pythagorean(a,b))
console.log(sin(10))
console.log(cos(10))
console.log(tan(10))
console.log(log(10))
console.log(circ_area(10))
console.log(circumference(10))
