const { Router } = require('express');
const TreeModel = require('../models/TreeModel.js');

module.exports = Router().get('/', async (req, res) => {
  const trees = await TreeModel.getAll();
  res.json(trees);
});
