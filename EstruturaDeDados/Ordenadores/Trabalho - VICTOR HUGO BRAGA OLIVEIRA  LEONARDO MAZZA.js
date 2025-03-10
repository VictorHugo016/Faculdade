let vet = []

function bubbleSort(vet){

    for(let i = 0; i < vet.length-1; i++){
        var aux = 0

        for(let j = 0; j < vet.length-i-1; j++){
            
            if( vet[j] > vet[j+1]){
                aux = vet[j]
                vet[j] = vet[j+1]
                vet[j+1] = aux
            }
        }
    }
}

function insercaodireta(vet) {

    const length = vet.length;
    
    for (let i = 1; i < length; i++) {
        let key = vet[i];
        let j = i - 1;
        
        while (j >= 0 && vet[j] > key) {
            vet[j + 1] = vet[j];
            j = j - 1;
        }
        vet[j + 1] = key;
    }
}

function selecaoDireta(vet) {
    
    const length = vet.length;
    
    for (let i = 0; i < length - 1; i++) {
        let menorIndice = i;
        
        for (let j = i + 1; j < length; j++) {
            
            if (vet[j] < vet[menorIndice]) {
                menorIndice = j;
            }
        }
        
            if (menorIndice !== i) {
                let aux = vet[i];
                vet[i] = vet[menorIndice];
                vet[menorIndice] = aux;
            }
    }
}

function aleatorio(vet){
    for(let i=0; i< 1000; i++){
        vet.push(parseInt(Math.random()*200))
    }
}

function ordenado(vet){  
    for(let i=0; i< 1000; i++){
        vet.push(parseInt(Math.random()*200))
    }
    bubbleSort(vet)
}

function invertido(vet){

    for(let i=0; i< 1000; i++){
        vet.push(parseInt(Math.random()*200))
    }
    vet.sort((a, b) => b - a);
}

function bubbleAleatorio(vet){
    aleatorio(vet)
    console.log(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor aleatorio - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleAleatorio(vet);

function bubbleOrdenado(vet){

    ordenado(vet)
    console.log(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor ordenado - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleOrdenado(vet);

function bubbleInvertido(vet){

    invertido(vet)
    console.log(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor invertido - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleInvertido(vet);

function insercaoAleatorio(vet){

    aleatorio(vet)
    console.log(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor aleatorio - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoAleatorio(vet);

function insercaoOrdenado(vet){

    ordenado(vet)
    console.log(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor ordenado - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoOrdenado(vet);

function insercaoInvertido(vet){

    invertido(vet)
    console.log(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor  invertido - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoInvertido(vet);

function selecaoAleatorio(vet){

    aleatorio(vet)
    console.log(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor  aleatorio - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoAleatorio(vet);

function selecaoOrdenado(vet){

    ordenado(vet)
    console.log(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor  ordenado - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoOrdenado(vet);

function selecaoInvertido(vet){

    invertido(vet)
    console.log(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log(vet)
    console.log("Bubble Sort com vetor  invertido - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoInvertido(vet);







