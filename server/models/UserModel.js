const mongoose = require('mongoose');

// Define schema
const Schema = mongoose.Schema;

// setting up fields for the schema with datatype
const userSchema = new Schema(
  {
    googleId: String,
    firstName: String,
    lastName: String,
    email: { type: String, required: true },
    password: String, // first-party passwords currently not implemented
    ingredients: { type: Schema.Types.Mixed, default: {} },
    favorites: { type: Schema.Types.Mixed, default: [] },
  },
  { minimize: false }
);

// setting up a model
const User = mongoose.model('User', userSchema);

module.exports = User;

// // Compile model from schema
// const Student = mongoose.model('Student', studentSchema);

// // You must export your model through module.exports
// // The collection name should be 'student'
// // module.exports = mongoose.model(Student, studentSchema);
