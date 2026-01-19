const model = require('../models/animeModel');

exports.listarTodos = (req, res) => {
  model.getAll((err, animes) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(animes);
  });
};

exports.buscarPorId = (req, res) => {
  model.getById(req.params.id, (err, anime) => {
    if (!anime) {
      return res.status(404).json({ mensagem: "Anime não encontrado" });
    }
    res.json(anime);
  });
};

exports.buscarPorGenero = (req, res) => {
  model.getByGenero(req.params.genero, (err, animes) => {
    if (animes.length === 0) {
      return res.status(404).json({ mensagem: "Gênero não encontrado" });
    }
    res.json(animes);
  });
};

exports.buscarPorNota = (req, res) => {
  model.getByNota(req.params.nota, (err, animes) => {
    if (animes.length === 0) {
      return res.status(404).json({ mensagem: "Nenhum anime encontrado" });
    }
    res.json(animes);
  });
};
