function acenderLampada(){
    document.getElementById("Luz").src="_imagens/lampada-acesa.jpg"
    
}
function apagarLampada(){
    document.getElementById("Luz").src="_imagens/lampada-apagada.jpg"
}
function quebrarLampada(){
    document.getElementById("Luz").src="_imagens/lampada-quebrada.jpg"
}
/* 
Não foi preciso adicionar cada imagem das lampadas no codigo e sim utilizar o SRC dentro 
de cada função para ser alterada apos a função ser chamada la no evento do mouse no html
*/