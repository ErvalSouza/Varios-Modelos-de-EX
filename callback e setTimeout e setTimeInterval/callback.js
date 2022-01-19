    //  function dobro(n1,cb){
    //      let op=n1*2
    //  cb(op)
    //  }
    
    //  function triplo(n1,cb){
    //      let op=n1*3
    //  cb(op)
    //  }
    
    //  function aplicar(num){
    
    //      console.log(num)
    //   }
    
    // dobro(5,aplicar)
    //  triplo(10, aplicar)
    // function exibir(valor){
    //     console.log(valor)
    //      }
       
    //     function nome(meuNome,meuSobrenome, cb){
    //      let mostrar= meuNome + " " + meuSobrenome
    //       cb(mostrar)
    //     }
    //     nome("Erval","Ubiratan", exibir)

    let meuTempo= setTimeout(function(){
function mostrar(valor){
    console.log(valor)
}
function nome(nome,sobrenome,cb){
    let op=(nome+ " " +sobrenome)
    cb(op)
}
nome("Erval", "Souza",mostrar)
    },3000)
    