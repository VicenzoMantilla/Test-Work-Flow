const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PsychologistSchema = new Schema({
  full_name: { type: String, required: true},
  email: { type: String, required: true},
  license: { type: String, required: true},
  address: String,
  phone_number: { type: String, required: true},
  birth_date: Date,
});

module.exports = mongoose.model('Psychologists', PsychologistSchema)