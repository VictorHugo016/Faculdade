import pandas as pd
import sqlite3

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query_top_players = """
    SELECT player_id, MAX(salary) AS max_salary
    FROM salary
    GROUP BY player_id
    ORDER BY max_salary DESC
    LIMIT 5
"""
result_top_players = conn.execute(query_top_players).fetchall()

top_players = []
for player_id, max_salary in result_top_players:
    query_player_name = f"SELECT name_given FROM player WHERE player_id = '{player_id}'"
    result_player_name = conn.execute(query_player_name).fetchone()
    if result_player_name:
        player_name = result_player_name[0]
        top_players.append({'name': player_name, 'max_salary': max_salary})

conn.close()

higher_salaries = pd.DataFrame(top_players)

print(higher_salaries)
