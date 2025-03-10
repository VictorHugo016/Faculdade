import pandas as pd
import sqlite3
import numpy as np
import statistics

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query = "SELECT w FROM manager"
result = conn.execute(query).fetchall()

wins = [row[0] for row in result]

max_wins = max(wins)
min_wins = min(wins)

desvio_Wins = round(statistics.stdev(wins), 2)

media_wins = round(np.mean(wins), 2)

mediana_wins = np.median(wins)

moda_wins = np.unique(wins, return_counts=True)[0][np.argmax(np.unique(wins, return_counts=True)[1])]

desvio_padrao_wins = statistics.stdev(wins)

media_wins_unrounded = statistics.mean(wins)

coeficiente_variacao_wins = round((desvio_padrao_wins / media_wins_unrounded) * 100, 2)

conn.close()

victory = pd.DataFrame({
    'Desvio_Padrao_Wins': [desvio_Wins],
    'Media_Wins': [media_wins],
    'Mediana_Wins': [mediana_wins],
    'Moda_Wins': [moda_wins],
    'Coeficiente_de_Variacao_Wins': [coeficiente_variacao_wins],
    'Maximo_Wins': [max_wins],
    'Minimo_Wins': [min_wins],
})

print(victory)
