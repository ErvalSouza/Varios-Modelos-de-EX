let meuTimeOut= setTimeout(function(){
    console.log("Testando o setTimeout")
    },2000)

    //clearTimeout(meuTimeOut); // esta ultima declaração é usada para interromper o processo do Timeout
    let meutimeOut= setTimeout(function(){
        function exibir(valor){
            console.log(valor)
             }
           
            function nome(meuNome,meuSobrenome, cb){
             let mostrar= meuNome + " " + meuSobrenome
              cb(mostrar)
            }
        nome("Erval", "Souza", exibir)
        },2000)