// O Reduce faz a soma de todos os valores do array
let roupas=[
{Tipo: "camisa", Tamanho:"G", Cor:"Preta", Valor: 25},
{Tipo: "Bermuda", Tamanho:"40", Cor:"Branca", Valor: 50},
{Tipo: "Calça", Tamanho:"G", Cor:"Jeans", Valor: 90}

]
let totalValores= roupas.reduce((valorInicial, valorAtual) => valorInicial+ valorAtual.Valor,0)
console.log(totalValores)
