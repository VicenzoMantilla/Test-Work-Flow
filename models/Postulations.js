const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PostulationsSchema = new Schema({
  id_clients: String,
  id_profile: String,
  description: { type: String, required: true},
})

module.exports = mongoose.model('postulations',PostulationsSchema)