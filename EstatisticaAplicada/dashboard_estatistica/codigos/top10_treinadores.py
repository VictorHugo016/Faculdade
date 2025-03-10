import pandas as pd
import sqlite3

conn = sqlite3.connect("C:\\Users\\Victor\\Desktop\\dashboard_estatistica\\bd\\sqlite\\database.sqlite")

query_total_wins = """
    SELECT m.player_id, p.name_given, SUM(m.w) AS total_wins
    FROM manager m
    INNER JOIN player p ON m.player_id = p.player_id
    GROUP BY m.player_id
"""
result_total_wins = conn.execute(query_total_wins).fetchall()

total_wins = [{'name': row[1], 'total_wins': row[2]} for row in result_total_wins]

total_wins_sorted = sorted(total_wins, key=lambda x: x['total_wins'], reverse=True)

top_coaches = total_wins_sorted[:10]

conn.close()

top_coaches = pd.DataFrame(top_coaches)

print(top_coaches)
