//8. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, indique a quantidade de cada um desses componentes para se obter uma certa quantidade de latão (requerida pelo usuário).

const qtdLatao = parseFloat(prompt('Informe a quantidade de latão requerida.'))

 const qtdCobre = 70 * qtdLatao
 const qtdZinco = 30 * qtdLatao

 alert(`Voce pediu ${qtdLatao} unidades de latão, para essa quantidade teremos ${qtdCobre}% de Cobre e ${qtdZinco}% de Zinco`)


    