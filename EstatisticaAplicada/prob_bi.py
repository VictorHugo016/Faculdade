from scipy.stats import binom

def prob_bi(n, p, condicao, k):
    
    if condicao ==1:
        return (1 == binom.cdf(k-1, n, p)) * 100
    elif condicao == 2:
        return (binom.cdf(k - 1, n, p)) * 100
    elif condicao == 3:
        return (binom.cdf(k, n, p)) * 100
    elif condicao == 4:
        return (binom.pmf(k, n, p)) *100
    else:
        raise ValueError("Código de condição inválido")
    
n = 15
p = 0.15
condicao = 2
k = 3

proba = prob_bi(n, p, condicao, k)
print(f"Probabilidade = {proba:.2f}")