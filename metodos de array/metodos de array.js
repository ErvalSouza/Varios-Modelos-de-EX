const locais = [
    {id: 1, rua: "Manoel Luis Carneiro", bairro: "Centro", casas: 50, emObras: "Sim"},
    {id: 2, rua: "Jorge Luis", bairro: "Sapé", casas: 30, emObras: "Sim"}

  ]
  console.log("map")
  let ids= locais.map(produto=>produto.id);
  console.log("ID" +" " +ids)
  let ruas= locais.map(produto=>produto.rua);
  console.log("Ruas" + " " +ruas)
  let bairros= locais.map(produto=>produto.bairro);
  console.log("Bairros" + " " +bairros)

  // console.log("filter")
  
  // let ruas= locais.filter(produto=>produto.rua == "Jorge Luis");
  // console.log(ruas)
  // let ids= locais.filter(produto=>produto.id == 1);
  // console.log(ids)
  
//   let saber= locais
// .filter(valor =>valor.emObras=="Sim")
// .map(valor => valor.rua)
// console.log(`As ruas a seguir  Rua: ${saber} estão em obras`)
  
