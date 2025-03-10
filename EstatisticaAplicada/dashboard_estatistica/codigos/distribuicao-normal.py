import sqlite3
import pandas as pd
import scipy.stats as stats
from statistics import mean, pstdev

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")
cursor = conn.cursor()

query = """
    SELECT t.w
    FROM team t
    JOIN postseason p ON t.team_id = p.team_id_winner AND t.year = p.year
    WHERE p.round = 'WS'
"""

cursor.execute(query)
dados_brutos = cursor.fetchall()

vitorias = [tupla[0] for tupla in dados_brutos]

media = mean(vitorias)
dp = pstdev(vitorias)

z = (100 - media) / dp

probabilidade = (1 - stats.norm.cdf(z)) * 100

dados = [{
    'Média de vitórias': round(media, 2),
    'DP de vitórias': round(dp, 2),
    'Probabilidade de mais de 100 vitórias (%)': round(probabilidade, 2)
}]
distribuicao_normal = pd.DataFrame(dados)

conn.close()

print(distribuicao_normal)
