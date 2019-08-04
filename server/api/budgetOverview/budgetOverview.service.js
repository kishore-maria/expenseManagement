const Budget = require('../budget/budget.schema')

const Expense = require('../expense/expense.schema')

const Promise = require('promise')

this.getTotalBudgetOverview = () => {
  var promise = new Promise(async (rs, rj) => {
    try {
      let data = {}
      let [budget] = await (Budget.find())
      let totalBudget = budget.budget
      data.totalBudget = totalBudget
      let expense = await (Expense.find({ status: { $ne: "DELETED" } }))
      let totalExpense = expense.reduce((total, expense) => total + expense.amount, 0)
      data.totalExpense = totalExpense
      data.remaining = totalBudget - totalExpense
      data.totalPercentage = Math.floor(totalExpense / totalBudget * 100)
      return rs(data)
    } catch (err) {
      return rj(err)
    }
  })
  return promise
};