const Expense = require('./expense.schema')

const Promise = require('promise')

this.create = category => {
  let _category = new Expense(category)
  return _category.save()
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

this.update = (id, expense) => {
  let promise = new Promise(async (rs, rj) => {
    try {
      let result = await (Expense.findOneAndUpdate({ _id: id }, { $set: expense }, { new: true, useFindAndModify: false }))
      return rs(result)
    } catch (err) {
      return rj(err)
    }
  })
  return promise
}