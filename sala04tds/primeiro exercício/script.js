function divisao(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    document.getElementById('respMulti').innerHTML = numero1 / numero2
}

function multiplicacao(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
    document.getElementById('respMulti').innerHTML = numero1 * numero2
}

function soma(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
    document.getElementById('respMulti').innerHTML = numero1 + numero2
}

function subtracao(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
    document.getElementById('respMulti').innerHTML = numero1 - numero2
}