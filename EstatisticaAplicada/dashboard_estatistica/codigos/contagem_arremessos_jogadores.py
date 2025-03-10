import pandas as pd
import sqlite3

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query = "SELECT throws FROM player"
result = conn.execute(query).fetchall()

throws = [row[0] for row in result]

throws_count = []

throws_count.append(throws.count('L'))
throws_count.append(throws.count('R'))
throws_count.append(throws.count('B'))

conn.close()

throws = pd.DataFrame({
    'Braço': ['Esquerdo', 'Direito', 'Ambos'],
    'Arremessos': throws_count,
})

print(throws)
