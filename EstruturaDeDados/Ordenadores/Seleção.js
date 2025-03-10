let vet = [4,100, 13, 143, 56, 65, 33, 88, 1]

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