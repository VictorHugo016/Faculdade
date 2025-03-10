let vet = [4,100, 13, 143, 56, 65, 33, 88, 1]

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