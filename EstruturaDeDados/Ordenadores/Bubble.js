let vet = [4,100, 13, 143, 56, 65, 33, 88, 1]

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
