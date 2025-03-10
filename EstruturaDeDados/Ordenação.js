let vetor = []

function inserir(){
        if ( vetor.length < 50){
            vetor.push(Number(prompt(`Informe o valor a ser inserido`)))
            console.log(`Valor inserido com sucesso!`)
        }
        
        else{
            console.log(`O vetor está cheio!`)
        }
}

function removerN(){
    let numero = (Number(prompt(`Insira o valor que deseja remover!`)))
    let index = vetor.indexOf(numero)
    let removido = false    
        while (index !== -1) {
            vetor.splice(index, 1);
            console.log(`${numero} removido com sucesso.`);
            removido = true
            index = vetor.indexOf(numero);
            
        }
    
    if (!removido) {
        console.log(`${numero} não encontrado no vetor.`);
    } else {
        console.log(`Todos os ${numero} foram removidos do vetor.`);
    }
}

function removerP(){
    let posicao = (Number(prompt(`Insira a posição que deseja remover!`)))
    
    if (posicao >= 0 && posicao < vetor.length){
        let numero = vetor.slice(posicao, 1)
        console.log(`Elemento ${numero} removido da posição ${posicao} com sucesso.`)
    }
    
    else {
    console.log("Posição inválida.");
    }
}

function ParImpar(){
    let escolha = (String(prompt(`Você deseja somar par ou impar`)))
    let soma = 0
    
    while (escolha !== "par" && escolha !== "impar") {
        escolha = prompt("Por favor, digite apenas 'par' ou 'impar':");
    }

    if (escolha = "par"){
        for(let i = 0; i < vetor.length; i++)
            if(vetor[i] % 2 === 0){
                soma = soma + vetor[i]
            }
            console.log(`A soma dos pares é ${soma}`)
        }
    else if(escolha = "impar"){
        for(let i = 0; i < vetor.length; i++)
            if(vetor[i] % 2 !== 0){
                soma = soma + vetor[i]
            }
            console.log(`A soma dos impares é ${soma}`)
        }
}

function autoPreencher(){
    for(let i=0; i< 50; i++){
        vetor.push(parseInt(Math.random()*10))
    }
}