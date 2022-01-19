// const numeros=[2,3,6,7,9,5]
// let dobro= numeros.map(function(valor){
// return valor*2
// })
// console.log(dobro)

// const sum = (number1,number2)=> {
//      return number1+number2
     
// }
//    console.log(sum(2,2))



const multiplicar = (n1,n2,cb) =>{
let op=n1*n2
cb(op)
}
const aplicar=(valor)=>{
    console.log(valor)
}
multiplicar(5,3,aplicar)