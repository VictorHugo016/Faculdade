import pandas as pd
import sqlite3
import numpy as np
import statistics

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query = "SELECT l FROM manager"
result = conn.execute(query).fetchall()

losses = [row[0] for row in result]

max_losses = max(losses)
min_losses = min(losses)

desvio_Losses = round(statistics.stdev(losses), 2)

media_losses = round(np.mean(losses), 2)

mediana_losses = np.median(losses)

moda_losses = np.unique(losses, return_counts=True)[0][np.argmax(np.unique(losses, return_counts=True)[1])]

desvio_padrao_losses = statistics.stdev(losses)

media_losses_unrounded = statistics.mean(losses)

coeficiente_variacao_losses = round((desvio_padrao_losses / media_losses_unrounded) * 100, 2)

conn.close()

losses = pd.DataFrame({
    'Desvio_Padrao_Losses': [desvio_Losses],
    'Media_Losses': [media_losses],
    'Mediana_Losses': [mediana_losses],
    'Moda_Losses': [moda_losses],
    'Coeficiente_de_Variacao_Losses': [coeficiente_variacao_losses],
    'Maximo_Losses': [max_losses],
    'Minimo_Losses': [min_losses],
})

print(losses)
