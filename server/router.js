const express = require('express');
const _ourController = require('./controllers/_ourController');

module.exports = (app) => {
  const apiRoutes = express.Router();

  apiRoutes.get('/helloworld', _ourController.helloworld);

  app.use('/api', apiRoutes);
}