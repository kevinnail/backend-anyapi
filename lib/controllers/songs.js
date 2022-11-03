const { Router } = require('express');
const SongModel = require('../models/SongModel.js');
module.exports = Router().get('/', async (req, res) => {
  const songs = await SongModel.getAll();
  const filtered = songs.map(({ id, name, band, album, year, length }) => ({
    id,
    name,
    band,
    album,
    year,
    length,
  }));
  res.json(filtered);
});
