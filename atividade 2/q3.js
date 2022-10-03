const peso = parseFloat(prompt('Por favor digite seu peso:'))
const altura= parseFloat(prompt('Por favor digite sua altura:'))
const imc = peso / altura ** 2

if (imc < 18.5) {
    alert(`Seu IMC é ${imc.toFixed(1)}. Você está abaixo do peso!`)
}else if (imc >= 18.5 && imc <= 25){
    alert(`Seu IMC é ${imc.toFixed(1)}. Você está com peso normal!`)
} else if (imc > 25 && imc <= 30){
    alert(`Seu IMC é ${imc.toFixed(1)}. Você está acima do peso!`)
} else if (imc >30){
    alert(`Seu IMC é ${imc.toFixed(1)}. Você está obeso!`)
}