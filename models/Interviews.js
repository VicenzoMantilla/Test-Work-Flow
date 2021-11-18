const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const InterviewSchema = new Schema ({
  id_user: String,
  id_clients: String,
  id_postulation: String,
  date: { type: Date, required: true},
  time_range: String,
  result: { type: Boolean, required: true}
})

module.exports = mongoose.model('Interviews',InterviewSchema)