//11. Leia um número binário e transforme-o em decimal

const binario = []
const notacao = []
let somaDecimal = 0
let confirma = prompt('Deseja Iniciar? S ou N')
while(confirma.toLocaleUpperCase() == 'S'){
    binario.push(parseInt(prompt('Insira o valor em Binário para converter em decimal')))
    confirma = prompt('Inserir mais uma unidade em binário? S ou N')
}
alert('Valor inserido em binário foi:' + binario)

for (let i = 0; i < binario.length; i++){
    notacao [i] = 2**i
}

for (let i = 0; i < binario.length; i++) {
    if( binario[i] == 1){
        somaDecimal += notacao[i]
    }
}

alert(`${binario} Para Decimal: ${somaDecimal}`)