import pandas as pd
from scipy.stats import binom

probability = binom.pmf(2, 4, 27 / 40)

data = [{
    'Numero de campeonatos': 2,
    'Numero de realizações': 4,
    'Probabilidade de sucesso em uma tentativa': 27 / 40,
    'Resultado': round(probability * 100, 2)
}]

distribuicao_binomial = pd.DataFrame(data)
print(distribuicao_binomial)
