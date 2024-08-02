var op;
var ver = true;
function init() {
    var result = document.getElementById('result');
    var AC = document.getElementById('AC');
    var C = document.getElementById('C');
    var parenthesis = document.getElementById('parenthesis');
    var division = document.getElementById('division');
    var seven = document.getElementById('seven');
    var eight = document.getElementById('eight');
    var nine = document.getElementById('nine');
    var multiplication = document.getElementById('multiplication');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var six = document.getElementById('six');
    var substraction = document.getElementById('substraction');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var addition = document.getElementById('addition');
    var cero = document.getElementById('cero');
    var point = document.getElementById('point');
    var equal = document.getElementById('equal');
}

one.onclick = function(e) {
    result.textContent = result.textContent + "1";
}
two.onclick = function(e) {
    result.textContent = result.textContent + "2";
}
three.onclick = function(e) {
    result.textContent = result.textContent + "3";
}
four.onclick = function(e) {
    result.textContent = result.textContent + "4";
}
five.onclick = function(e) {
    result.textContent = result.textContent + "5";
}
six.onclick = function(e) {
    result.textContent = result.textContent + "6";
}
seven.onclick = function(e) {
    result.textContent = result.textContent + "7";
}
eight.onclick = function(e) {
    result.textContent = result.textContent + "8";
}
nine.onclick = function(e) {
    result.textContent = result.textContent + "9";
}
cero.onclick = function(e) {
    result.textContent = result.textContent + "0";
}
//OPERATIONS
addition.onclick = function(e) {
    result.textContent = result.textContent + "+";
}
substraction.onclick = function(e) {
    result.textContent = result.textContent + "-";
}
multiplication.onclick = function(e) {
    result.textContent = result.textContent + "*";
}
division.onclick = function(e) {
    result.textContent = result.textContent + "/";
}

parenthesis.onclick = function(e) {
    if (ver!=false){
        ver = false;
        result.textContent = result.textContent + "(";
    } else {
        ver = true;
        result.textContent = result.textContent + ")";
    }
}
AC.onclick = function(e) {
    AClear();
}
C.onclick = function(e) {
    let text = result.textContent;

    if (text.length > 0) {
        text = text.slice(0, -1);
    }

    result.textContent = text;
}

equal.onclick = function(e) {
    try {
        result.textContent = eval(result.textContent);
    } catch (error) {
        result.textContent = "SYNTAX ERROR"
    }
}

function AClear() {
    result.textContent = "";
    ver = true;
}