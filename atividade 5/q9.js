// 9. Leia a velocidade máxima permitida em uma avenida e a velocidade com que o motorista
// estava dirigindo nela e calcule a multa que uma pessoa vai receber, sabendo que são
// pagos: 
//     a) 50 reais se o motorista estiver ultrapassar em até 10km/h a velocidade permitida (ex.: velocidade máxima: 50km/h; motorista a 60km/h ou a 56km/h); 
//     b) 100 reais, se o motorista ultrapassar de 11 a 30 km/h a velocidade permitida. c) 200 reais, se estiver
//     acima de 31km/h da velocidade permitida.


const velocidadeMaxima = parseFloat(prompt('Qual a velocidade registrada?'))

if(velocidadeMaxima >= 51 && velocidadeMaxima <= 60){
    alert('Sua multa foi de R$ 50,00')
} else if(velocidadeMaxima > 60 && velocidadeMaxima <= 80){
    alert('Sua multa foi de R$ 100,00')
} else if(velocidadeMaxima > 80){
    alert('Sua multa foi de R$ 200,00')
} else{
    alert('Dentro da velocidade permitida')
}