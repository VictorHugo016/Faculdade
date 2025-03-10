import pandas as pd
import sqlite3

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query = "SELECT bats FROM player"
result = conn.execute(query).fetchall()

bats = [row[0] for row in result]

bats_count = []
bats_count.append(bats.count('L'))
bats_count.append(bats.count('R'))
bats_count.append(bats.count('B'))

conn.close()

bats = pd.DataFrame({
    'Braço': ['Esquerdo', 'Direito', 'Ambos'],
    'Rebatidas': bats_count,
})

print(bats)
