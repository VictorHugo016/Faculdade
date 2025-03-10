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
  
function quickSort(vet, left, right){
    let i= left 
    let j= right 
    let aux 
    let pivoIndex = Math.floor((left + right)/2) 
    let pivo = vet[pivoIndex]
    
    //* partição
        while (i<=j) {
            while (vet[i]< pivo) { 
                i++
            }
            while (vet[j]> pivo) { 
                j--
            }
            if (i<=j) { 
                aux = vet[i]
                vet[i]= vet[j] 
                vet[j]=aux     
                i++ 
                j-- 
            }
        }
    //*recursão
    if (left<j) { 
        quickSort(vet, left, j) 
    }
    if (i< right) {
        quickSort(vet, i, right) 
    }
    
}






function aleatorio100(vet){
    for(let i=0; i< 100; i++){
        vet.push(parseInt(Math.random()*100))
    }
}

function aleatorio1000(vet){
    for(let i=0; i< 1000; i++){
        vet.push(parseInt(Math.random()*1000))
    }
}

function aleatorio10000(vet){
    for(let i=0; i< 10000; i++){
        vet.push(parseInt(Math.random()*10000))
    }
}

function aleatorio100000(vet){
    for(let i=0; i< 100000; i++){
        vet.push(parseInt(Math.random()*100000))
    }
}






function ordenado100(vet){  
    for(let i=0; i< 100; i++){
        vet.push(parseInt(Math.random()*100))
    }
    bubbleSort(vet)
}

function ordenado1000(vet){  
    for(let i=0; i< 1000; i++){
        vet.push(parseInt(Math.random()*1000))
    }
    bubbleSort(vet)
}

function ordenado10000(vet){  
    for(let i=0; i< 10000; i++){
        vet.push(parseInt(Math.random()*10000))
    }
    bubbleSort(vet)
}

function ordenado100000(vet){  
    for(let i=0; i< 100000; i++){
        vet.push(parseInt(Math.random()*100000))
    }
    bubbleSort(vet)
}







function invertido100(vet){

    for(let i=0; i< 100; i++){
        vet.push(parseInt(Math.random()*100))
    }
    vet.sort((a, b) => b - a);
}

function invertido1000(vet){

    for(let i=0; i< 1000; i++){
        vet.push(parseInt(Math.random()*1000))
    }
    vet.sort((a, b) => b - a);
}

function invertido10000(vet){

    for(let i=0; i< 10000; i++){
        vet.push(parseInt(Math.random()*10000))
    }
    vet.sort((a, b) => b - a);
}

function invertido100000(vet){

    for(let i=0; i< 100000; i++){
        vet.push(parseInt(Math.random()*100000))
    }
    vet.sort((a, b) => b - a);
}









function bubbleAleatorio100(vet){
    aleatorio100(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor aleatorio de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleAleatorio100(vet);

function bubbleAleatorio1000(vet){
    aleatorio1000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor aleatorio de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleAleatorio1000(vet);

function bubbleAleatorio10000(vet){
    aleatorio10000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor aleatorio de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleAleatorio10000(vet);

function bubbleAleatorio100000(vet){
    aleatorio100000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor aleatorio de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleAleatorio100000(vet);








function bubbleOrdenado100(vet){

    ordenado100(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor ordenado de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleOrdenado1000(vet);

function bubbleOrdenado1000(vet){

    ordenado1000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor ordenado de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleOrdenado1000(vet);

function bubbleOrdenado10000(vet){

    ordenado10000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor ordenado de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleOrdenado10000(vet);

function bubbleOrdenado100000(vet){

    ordenado100000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor ordenado de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleOrdenado100000(vet);








function bubbleInvertido100(vet){

    invertido100(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor invertido de 100- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleInvertido100(vet);

function bubbleInvertido1000(vet){

    invertido1000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor invertido de 1000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleInvertido1000(vet);

function bubbleInvertido10000(vet){

    invertido10000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor invertido de 10000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleInvertido10000(vet);

function bubbleInvertido100000(vet){

    invertido100000(vet)
    const startTime = Date.now()
    bubbleSort(vet)
    const endTime = Date.now()
    console.log("Bubble Sort com vetor invertido de 100000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

bubbleInvertido100000(vet);










function insercaoAleatorio100(vet){

    aleatorio100(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor aleatorio de 100- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoAleatorio100(vet);

function insercaoAleatorio1000(vet){

    aleatorio1000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor aleatorio de 1000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoAleatorio1000(vet);

function insercaoAleatorio10000(vet){

    aleatorio10000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor aleatorio de 10000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoAleatorio10000(vet);

function insercaoAleatorio100000(vet){

    aleatorio100000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor aleatorio de 100000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoAleatorio100000(vet);







function insercaoOrdenado100(vet){

    ordenado100(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor ordenado de 100- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoOrdenado100(vet);


function insercaoOrdenado1000(vet){

    ordenado1000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor ordenado de 1000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoOrdenado1000(vet);


function insercaoOrdenado10000(vet){

    ordenado10000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor ordenado de 10000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoOrdenado10000(vet);


function insercaoOrdenado100000(vet){

    ordenado100000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor ordenado de 100000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoOrdenado100000(vet);










function insercaoInvertido100(vet){

    invertido100(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor  invertido de 100- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoInvertido100(vet);

function insercaoInvertido1000(vet){

    invertido1000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor  invertido de 1000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoInvertido1000(vet)

function insercaoInvertido10000(vet){

    invertido10000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor  invertido de 10000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoInvertido10000(vet)

function insercaoInvertido100000(vet){

    invertido100000(vet)
    const startTime = Date.now()
    insercaodireta(vet)
    const endTime = Date.now()
    console.log("Inserção direta com vetor  invertido de 100000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

insercaoInvertido100000(vet)










function selecaoAleatorio100(vet){

    aleatorio100(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  aleatorio de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoAleatorio100(vet);

function selecaoAleatorio1000(vet){

    aleatorio1000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  aleatorio de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoAleatorio1000(vet);

function selecaoAleatorio10000(vet){

    aleatorio10000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  aleatorio de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoAleatorio10000(vet);

function selecaoAleatorio100000(vet){

    aleatorio100000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  aleatorio de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoAleatorio100000(vet);









function selecaoOrdenado100(vet){

    ordenado100(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  ordenado de 100- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoOrdenado100(vet);

function selecaoOrdenado1000(vet){

    ordenado1000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  ordenado de 1000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoOrdenado1000(vet);

function selecaoOrdenado10000(vet){

    ordenado10000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  ordenado de 10000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoOrdenado10000(vet);

function selecaoOrdenado100000(vet){

    ordenado100000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  ordenado de 100000- Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoOrdenado100000(vet);








function selecaoInvertido100(vet){

    invertido100(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  invertido de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoInvertido100(vet);


function selecaoInvertido1000(vet){

    invertido1000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  invertido de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoInvertido1000(vet);


function selecaoInvertido10000(vet){

    invertido10000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  invertido de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoInvertido10000(vet);

function selecaoInvertido100000(vet){

    invertido100000(vet)
    const startTime = Date.now()
    selecaoDireta(vet)
    const endTime = Date.now()
    console.log("Seleção direta com vetor  invertido de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

selecaoInvertido100000(vet);







function quickSortAleatorio100(vet){

    aleatorio100(vet)
    const startTime = Date.now()
    quickSort(vet, inicio = 0, fim = vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor  aleatorio de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortAleatorio100(vet);

function quickSortAleatorio1000(vet){

    aleatorio1000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor  aleatorio de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortAleatorio1000(vet)

function quickSortAleatorio10000(vet){

    aleatorio10000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor  aleatorio de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortAleatorio10000(vet)

function quickSortAleatorio100000(vet){

    aleatorio100000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor  aleatorio de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortAleatorio100000(vet)









function quickSortinvertido100(vet){

    invertido100(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor invertido de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortinvertido100(vet);

function quickSortinvertido1000(vet){

    invertido1000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor invertido de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortinvertido1000(vet)

function quickSortinvertido10000(vet){

    invertido10000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor invertido de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortinvertido10000(vet)

function quickSortinvertido100000(vet){

    invertido100000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor invertido de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortinvertido100000(vet)









function quickSortordenado100(vet){

    ordenado100(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor ordenado de 100 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortordenado100(vet);

function quickSortordenado1000(vet){

    ordenado1000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor ordenado de 1000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortordenado1000(vet)

function quickSortordenado10000(vet){

    ordenado10000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor ordenado de 10000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortordenado10000(vet)

function quickSortordenado100000(vet){

    ordenado100000(vet)
    const startTime = Date.now()
    quickSort(vet, 0, vet.length - 1)
    const endTime = Date.now()
    console.log("quicksort com vetor ordenado de 100000 - Tempo de execução: " + (endTime - startTime) + "ms")
    vet.length = 0
}

quickSortordenado100000(vet)