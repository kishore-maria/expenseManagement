var mongoose  = require('mongoose');
var { Schema }    = mongoose;
var Promise   = require("bluebird");
var timestamps = require('mongoose-timestamp');
var paginate  = require('mongoose-paginate');

var DB_NAME   = 'expenseData';

var fields = {
  category: [
    {
      name: String
    }
  ],
  expense: {
    category: String,
    itemName: String,
    cost: Number,
    date: Date,
  },
  budget: Number
};

var collection =
  {collection: DB_NAME};

var schema = new Schema(fields, collection);

schema.plugin(timestamps);
schema.plugin(paginate);

var model = mongoose.model(DB_NAME, schema);
Promise.promisifyAll(model);

module.exports = model;
module.exports.col = DB_NAME;
