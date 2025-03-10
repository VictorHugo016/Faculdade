import pandas as pd
import sqlite3
import numpy as np

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query_height = "SELECT height FROM player"
result_height = conn.execute(query_height).fetchall()

height_inches = [float(row[0]) for row in result_height if row[0]]
height_meters = [round(height / 39.37, 2) for height in height_inches]

if height_meters:
    media_height = round(np.mean(height_meters), 2)
else:
    media_height = None

query_weight = "SELECT weight FROM player"
result_weight = conn.execute(query_weight).fetchall()

weight_pounds = [float(row[0]) for row in result_weight if row[0]]
weight_kg = [round(weight * 0.453592, 2) for weight in weight_pounds]

if weight_kg:
    media_weight = round(np.mean(weight_kg), 2)
else:
    media_weight = None

conn.close()

height_weight = pd.DataFrame({
    'Media_Height_Meters': [media_height],
    'Media_Weight_Kg': [media_weight]
})

print(height_weight)
