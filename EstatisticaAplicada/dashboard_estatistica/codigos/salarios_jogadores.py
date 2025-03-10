import pandas as pd
import sqlite3
import numpy as np
import statistics

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query = "SELECT salary FROM salary"
result = conn.execute(query).fetchall()

salary = [row[0] for row in result]

desvio_salary = round(statistics.stdev(salary), 2)

media_salary = round(np.mean(salary), 2)

mediana_salary = np.median(salary)

moda_salary = np.unique(salary, return_counts=True)[0][np.argmax(np.unique(salary, return_counts=True)[1])]

desvio_padrao_salary = statistics.stdev(salary)
media_salary_unrounded = statistics.mean(salary)  
coeficiente_variacao_salary = round((desvio_padrao_salary / media_salary_unrounded) * 100, 2)

conn.close()

salary = pd.DataFrame({
    'Desvio_Padrao_Salary': [desvio_salary],
    'Media_Salary': [media_salary],
    'Mediana_Salary': [mediana_salary],
    'Moda_Salary': [moda_salary],
    'Coeficiente_de_Variacao_Salary': [coeficiente_variacao_salary]
})

print(salary)
