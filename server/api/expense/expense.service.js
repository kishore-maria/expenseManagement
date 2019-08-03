const Expense = require('./expense.schema')

this.setBudget = (budget) => {
  let _budget = new Expense(budget)
  return _budget.save()
}

this.find = (query = {}) => {
  return Expense.find(query).lean();
};

this.findOne = (query = {}) => {
  return Expense.findOne(query).lean();
};

this.findOneById = id => {
  var query = { _id: id };
  return Expense.findOne(query)
};