import sqlite3

release_list = [
    (1997, "Grand Theft Auto", "state of New Guernsey"),
    (1999, "Grand Theft Auto 2", "Anywhere, USA"),
    (2001, "Grand Theft Auto III", "Liberty City"),
    (2002, "Grand Theft Auto: Vice City", "Vice City"),
    (2004, "Grand Theft Auto: San Andreas", "state of San Andreas"),
    (2008, "Grand Theft Auto IV", "Liberty City"),
    (2013, "Grand Theft Auto V", "Los Santos")
]


connection = sqlite3.connect('amin.db')
cursor = connection.cursor()

cursor.execute('create table gta (release_year integer, release_name text, city text)')

cursor.executemany("insert into gta values (?,?,?)" , release_list)

for row in cursor.execute("select * from gta"):
    print(row)

connection.close()