/*
Estrutura de controle mais o fator mutiplo e com isso dá grandes intervalos, ser critico em procurar a estrutura que adapte 

*/

function getInteiroAleatorioEntre(min,max){
    const valor =Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
//Laço entre quando estiver a condição aqui e passar ele terá um limite
while(opcao != -0001){
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`opcao escolhida foi ${opcao}.`)
}

console.log('Até a proxima')
