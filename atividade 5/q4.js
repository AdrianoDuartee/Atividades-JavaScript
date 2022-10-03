//4. Escreva um programa que leia uma letra e mostre se ela é vogal ou consoante

const letra = prompt('Inserir uma letra')
switch(letra.toUpperCase()){
    case 'A':
        alert('Vogal');
        break;
    case 'E':
        alert('Vogal');
        break;
    case 'I':
        alert('Vogal');
        break;
    case 'O':
        alert('Vogal');
        break;
    case 'U':
        alert('Vogal');
        break;
    default:
        alert('Consoante');
}