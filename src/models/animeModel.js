const db = require('../database/db');

exports.getAll = (callback) => {
  db.all("SELECT * FROM animes", callback);
};

exports.getById = (id, callback) => {
  db.get("SELECT * FROM animes WHERE id = ?", [id], callback);
};

exports.getByGenero = (genero, callback) => {
  db.all(
    "SELECT * FROM animes WHERE genero LIKE ?",
    [`%${genero}%`],
    callback
  );
};

exports.getByNota = (nota, callback) => {
  db.all("SELECT * FROM animes WHERE nota >= ?", [nota], callback);
};
