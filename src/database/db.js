const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(
  path.resolve(__dirname, 'database.db'),
  (err) => {
    if (err) console.error(err.message);
    else console.log("Banco de dados conectado!");
  }
);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS animes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      genero TEXT NOT NULL,
      episodios INTEGER,
      nota REAL,
      ano INTEGER
    )
  `);
});

module.exports = db;
