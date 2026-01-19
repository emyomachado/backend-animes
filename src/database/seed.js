const db = require('./db');

db.serialize(() => {
  db.run(`
    INSERT INTO animes (titulo, genero, episodios, nota, ano) VALUES
    ('Frieren: Beyond Journeys End', 'Fantasia, Aventura, Drama', 28, 9.3, 2023),
    ('Lovely Complex', 'Romance, Shoujo', 24, 8.0, 2007),
    ('Attack on Titan', 'Ação, Fantasia, Aventura', 87, 9.0, 2013),
    ('No Game No Life', 'Isekai, Estratégia, Fantasia', 12, 8.0, 2014),
    ('One Piece', 'Aventura, Ação, Fantasia', 1100, 9.1, 1999),
    ('Demon Slayer', 'Ação, Fantasia', 55, 8.8, 2019),
    ('Code Geass', 'Mecha, Suspense, Militar', 50, 8.7, 2006),
    ('Fairy Tail', 'Ação, Aventura, Fantasia', 328, 7.5, 2009),
    ('Kuroko no Basket', 'Esporte, Basquete', 75, 8.0, 2012),
    ('Your Name', 'Romance, Drama', 1, 8.9, 2016)
  `);

  console.log("Banco populado com sucesso!");
});
