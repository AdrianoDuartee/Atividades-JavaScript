const altura = parseFloat(prompt( 'Qual a sua altura?'))
const genero = prompt(`Informe seu gênero:
Digite F se for feminino
Digite M se for masculino`)

if(genero.toLocaleUpperCase() == 'F') {
    const pesoIdeial = (62.1 * altura) - 44.7;
    alert(`Seu peso ideal é: ${pesoIdeial.toFixed(2)}`)
} else if (genero.toLocaleUpperCase() == 'M'){
    const pesoIdeial= (72.7 * altura) - 58;
    alert(`Seu peso ideal é: ${pesoIdeial.toFixed(2)}`)
}