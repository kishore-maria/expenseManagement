const path = require('path');

const express = require('express');

const angularJson = require('../angular.json');

module.exports = (app) => {
  let dist = path.join(__dirname, `../${angularJson.projects['expenseManagement'].architect.build.options.outputPath}/`)
  app.use('/', express.static(dist));
  
  require('./api/budget/budget.route')(app);
  require('./api/expense/expense.route')(app);

  return app.get('*', (req, res) => res.sendFile(path.join(__dirname, `../${angularJson.projects['expenseManagement'].architect.build.options.outputPath}/index.html`)));
}