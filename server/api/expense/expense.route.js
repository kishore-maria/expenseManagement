const Config = require('../../config/config');

const index = `${Config.server.context}/api/expense`;

const ExpenseService = require('./expense.service')

const join = link => index + (link != null ? link : '');

module.exports = (app) => {

  app.post(join("/"), this.addExpense);

  app.put(join("/"), this.updateExpense);

  app.get(join("/"), this.getExpenses);

  app.get(join("/:id"), this.getExpense);

};

this.getExpenses = async (req, res) => {
  try {
    let result = await (ExpenseService.find())
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
}

this.getExpense = async (req, res) => {
  let expenseId = req.params
  try {
    let result = await (ExpenseService.findOneById(expenseId))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
}

this.addExpense = async (req, res) => {
  let expense = req.body
  try {
    let result = await (ExpenseService.create(expense))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
};

this.updateExpense = async (req, res) => {
  let expense = req.body
  try {
    let result = await (ExpenseService.update(expense._id, expense))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
};

