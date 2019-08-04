const Config = require('../../config/config');

const index = `${Config.server.context}/api/expense`;

const ExpenseService = require('./expense.service')

const join = link => index + (link != null ? link : '');

module.exports = (app) => {

  app.post(join("/"), this.addExpense);

  app.put(join("/"), this.updateExpense);

  app.put(join("/undo"), this.undoDeleteExpense);

  app.get(join("/"), this.getExpenses);

  app.get(join("/:id"), this.getExpense);

  app.delete(join("/:id"), this.deleteExpense);

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

this.deleteExpense = async (req, res) => {
  let expenseId = req.params.id
  let expense = {
    status: "DELETED"
  }
  try {
    let result = await (ExpenseService.update(expenseId, expense))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
};

this.undoDeleteExpense = async (req, res) => {00
  let expenseId = req.body._id
  let expense = {
    status: "ADDED"
  }
  try {
    let result = await (ExpenseService.update(expenseId, expense))
    return res.send(result);
  } catch (err) {
    console.log(err)
    return res.status(400).send(err);
  }
};