const Config = require('../../config/config');

const index = `${Config.server.context}/api/category`;

const CategoryService = require('./category.service')

const join = link => index + (link != null ? link : '');

module.exports = (app) => {

  app.post(join("/"), this.createCategory);

  app.get(join("/"), this.getCategories);

  app.delete(join("/:id"), this.deleteCategory);

};

this.createCategory = async (req, res) => {
  let category = req.body
  try {
    let existCategory = await(CategoryService.findOne({name: category.name}))
    if (existCategory)
      return res.status(400).send("Category name already exist. Try any another name.");
    let result = await(CategoryService.createCategory(category))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
};

this.getCategories = async (req, res) => {
  try {
    let result = await(CategoryService.find())
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
}

this.deleteCategory = async (req, res) => {
  let categoryId = req.params.id
  try {
    let result = await(CategoryService.deleteCategory(categoryId))
    return res.send(result);
  } catch (err) {
    return res.status(400).send(err);
  }
}