//o MAP ele mostra um determinado valor de um array valor este que selecionamos
let nomes=[ 
{pessoas:"Joao", idade: 27},
{pessoas:"Maria", idade: 19,},
{pessoas:"Pedro", idade: 20}

]

let copiados= nomes.map(valores=>valores.idade)
console.log(copiados)