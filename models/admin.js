const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AdminSchema = new Schema({
  id_admin: ObjectId,
  full_name: String,
  username: { type: String, required: true},
  password: { type: String, required: true},
});

module.exports = mongoose.model('admin',AdminSchema)