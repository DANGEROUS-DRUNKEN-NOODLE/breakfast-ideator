const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

// setting up fields for the schema with datatype
const recipeSchema = new Schema(
  {
    recipeId: { type: String, required: true },
    recipe: {type: Object, required: true},
    fromEndpoints: {type: Array, required: true}
  },
  { minimize: false, timestamps: true}
);

// setting up a model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;