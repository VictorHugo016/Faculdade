import pandas as pd
import sqlite3

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query = "SELECT salary FROM salary"
result = conn.execute(query).fetchall()

salary = [row[0] for row in result]

salary_filtered = [s for s in salary if s > 0]

max_salary = max(salary_filtered)
min_salary = min(salary_filtered)

conn.close()

highest_lowest_salary = pd.DataFrame({
    'Max_Salary': [max_salary],
    'Min_Salary': [min_salary]
})

print(highest_lowest_salary)