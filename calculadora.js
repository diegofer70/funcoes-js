var um = parseFloat(prompt("Digite o primeiro número: "));
var dois = parseFloat(prompt("Digite o segundo número: "));
var operacao = prompt("Digite a operação desejada: ");

function calculadora(um, dois, operacao) {
    switch(operacao) {
        case "+":
            return um + dois;
        case "-":
            return um - dois;
        case "*":
            return um * dois;
        case "/":
            return um / dois;
        default:
            return "Operação inválida";
    }
}

// console.log(`Calculadora: ${um} ${dois} ${operacao}`)

console.log("Número um:", um)
console.log("Múmero dois:", dois)
console.log("Operação:", operacao)

var resultado = calculadora(um, dois, operacao);
console.log("Resultado", resultado);