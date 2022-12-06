const { Router } = require('express');
// const {  } = require('../db.js'); // import models from db

const genresRouter = Router();

genresRouter.get('/', (req, res) => {
  res.send("Estas en generos");
});

module.exports = genresRouter;