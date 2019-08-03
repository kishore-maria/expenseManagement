const Category = require('./category.schema')

const Promise = require('promise')

this.createCategory = category => {
  let _category = new Category(category)
  return _category.save()
}

this.find = (query = {}) => {
  return Category.find(query).lean();
};

this.findOne = (query = {}) => {
  return Category.findOne(query).lean();
};

this.findOneById = id => {
  var query = {
    _id: id
  };
  return Category.findOne(query)
};

this.deleteCategory = _id => {
  let promise = new Promise(async (rs, rj) => {
    try {
      let result = await (Category.findOneAndRemove({
        _id
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