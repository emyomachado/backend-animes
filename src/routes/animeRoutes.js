const express = require('express');
const router = express.Router();
const controller = require('../controllers/animeController');

router.get('/animes/genero/:genero', controller.buscarPorGenero);
router.get('/animes/nota/:nota', controller.buscarPorNota);
router.get('/animes/:id', controller.buscarPorId);
router.get('/animes', controller.listarTodos);

module.exports = router;
