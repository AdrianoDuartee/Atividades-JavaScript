const mensagem = prompt(`
Qual o combustível escolhido?
Digite G para gasolina
Digite A para álcool
`)  
const litros = Number(prompt('Quantos litros de combustível ira querer?'))

const gasolina = 2.70
const alcool = 1.90

if (mensagem.toLocaleUpperCase() == "G"){
    if (litros > 25){
        const precofinal = litros * gasolina * 0.95;
        alert(`O valor total para pagar é: ${precofinal} `)
    } else {
        const precofinal = litros * gasolina * 0.97;
        alert(`O valor total para pagar é: ${precofinal} `) 
    }
} else if (mensagem.toLocaleUpperCase() == "A") {
    if (litros > 25){
        const precofinal = litros * alcool * 0.96;
        alert(`O valor total para pagar é: ${precofinal} `)
    } else {
        const precofinal = litros * alcool * 0.97;
        alert(`O valor total para pagar é: ${precofinal} `)
    }
}
