const Budget = require('./budget.schema')

const Promise = require('promise')

this.createBudget = (budget) => {
  let _budget = new Budget(budget)
  return _budget.save()
}

this.find = (query = {}) => {
  return Budget.find(query).lean();
};

this.findOne = (query = {}) => {
  return Budget.findOne(query).lean();
};

this.findOneById = id => {
  var query = {
    _id: id
  };
  return Budget.findOne(query)
};

this.updateBudget = (id, budget) => {
  let promise = new Promise(async (rs, rj) => {
    try {
      let result = await (Budget.findOneAndUpdate({
        _id: id
      }, {
        $set: {
          budget: budget.budget
        }
      }, {
        new: true
      }))
      return rs(result)
    } catch (err) {
      return rj(err)
    }
  })
  return promise
}