
    let meuIntervalo=setInterval(function(){
        console.log("Testando o setTimeinterval")
        },1000)

        setTimeout(function(){
           console.log("Intervalo Interrompido")
            clearInterval(meuIntervalo)
        },3500) 
        //a funçao acima foi utilizada para interromper o ciclo de impressoes, senão seria infinito
