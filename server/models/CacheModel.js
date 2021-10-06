const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

// setting up fields for the schema with datatype
const cacheSchema = new Schema(
  {
    endpoint: {type: String, required: true},
    data: {type: Object, required: true}
  },
  { minimize: false, timestamps: true}
);

// setting up a model
const Cache = mongoose.model('Cache', cacheSchema);

module.exports = Cache;