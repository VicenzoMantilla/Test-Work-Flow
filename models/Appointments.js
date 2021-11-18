const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AppointmentsSchema = new Schema ({
  id_applicant: String,
  id_psychologist: String,
  date: { type: Date, required: true},
  time: { type: String, required: true},
})

module.exports = mongoose.model('Appointments',AppointmentsSchema)