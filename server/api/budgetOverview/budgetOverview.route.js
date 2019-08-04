const Config = require('../../config/config');

const index = `${Config.server.context}/api/budgetOverview`;

const BudgetOverviewService = require('./budgetOverview.service')

const join = link => index + (link != null ? link : '');

module.exports = (app) => {

  app.get(join("/"), this.getBudgetOverview);

};

this.getBudgetOverview = async (req, res) => {
  try {
    let result = await (BudgetOverviewService.getTotalBudgetOverview())
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
}