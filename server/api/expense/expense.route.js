const Config = require('../../config/config');

const index = `${Config.server.context}/api/expense`;

const ExpenseService = require('./expense.service')

const join = link => index + (link != null ? link : '');

module.exports = (app) => {
  app.post(join("/"), this.setBudget);
};

this.setBudget = async (req, res) => {
  let budget = req.body
  console.log(budget)
  try {
    let result = await(ExpenseService.setBudget(budget))
    console.log(result)
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
};

