const Config = require('../../config/config');

const index = `${Config.server.context}/api/budget`;

const BudgetService = require('./budget.service')

const join = link => index + (link != null ? link : '');

module.exports = (app) => {

  app.post(join("/"), this.setBudget);

  app.get(join("/"), this.getBudget);

};

this.setBudget = async (req, res) => {
  let budget = req.body
  try {
    let existBudget = await(BudgetService.findOne())
    if (existBudget)
      var result = await(BudgetService.updateBudget(existBudget._id, budget))
    else
      var result = await(BudgetService.createBudget(budget))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
};

this.getBudget = async (req, res) => {
  try {
    let result = await(BudgetService.findOne())
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
}