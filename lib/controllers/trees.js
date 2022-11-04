const { Router } = require('express');
const TreeModel = require('../models/TreeModel.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const tree = await TreeModel.getById(req.params.id);
    res.json(tree);
  })

  .get('/', async (req, res) => {
    const trees = await TreeModel.getAll();
    res.json(trees);
  });
