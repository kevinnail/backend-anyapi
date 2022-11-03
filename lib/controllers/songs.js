const { Router } = require('express');
const SongModel = require('../models/SongModel.js');
module.exports = Router()
  .get('/:id', async (req, res) => {
    const song = await SongModel.getById(req.params.id);
    res.json(song);
  })

  .get('/', async (req, res) => {
    const songs = await SongModel.getAll();
    res.json(songs);
  });
