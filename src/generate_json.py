import json
import random

names = ["Michael Phelps", "Missy Franklin", "Bode Miller", "Lindsay Vonn", "Tina Maze", "Julia Mancuso", "Butch Johnson", "Barbara Mensing", "Reese Hoffa", "Betty Heidler"]
sports = ["Swimming", "Gymnastics", "Athletics", "Cycling", "Basketball", "Tennis", "Soccer", "Volleyball", "Boxing", "Rowing"]
countries = ["United States", "China", "Russia", "Germany", "Great Britain", "France", "Japan", "Australia", "South Korea", "Italy"]
years = [2020, 2016, 2012, 2008, 2004, 2000, 1996, 1992, 1988, 1984]
ages = [20,21,22,23,24,25,26,27,28,29,20,31,32,33,34,35]

records = []

for i in range(100000):
    record = {
        "athlete": random.choice(names),
        "age": random.choice(ages),
        "country": random.choice(countries),
        "year": random.choice(years),
        "sport": random.choice(sports),
        "gold": random.choice([0,1,2,3,4]),
        "silver": random.choice([0,1,2,3,4]),
        "bronze": random.choice([0,1,2,3,4])
    }
    records.append(record)

with open('data.json', 'w') as f:
    json.dump(records, f)