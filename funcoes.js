function somar(){

    // Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    // Processamento
    var soma = numero1 + numero2

    // Saída
    resultado.innerText = `O resultado da soma é ${soma}`
}

function subtrair(){

    // Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    // Processamento da conta
    var soma = numero1 - numero2

    // Saída
    resultado.innerText = `O resultado da subtração é ${soma}`
}

function multiplicar(){

    // Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    // Processamento
    var soma = numero1 * numero2

    // Saída
    resultado.innerText = `O resultado da multiplicação é ${soma}`
}

function dividir(){

    // Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value)
    var numero2 = parseFloat(document.getElementById('numero2').value)
    var resultado = document.getElementById('resultado')

    // Processamento
    var soma = numero1 / numero2

    // Saída
    resultado.innerText = `O resultado da divisão é ${soma}`
}