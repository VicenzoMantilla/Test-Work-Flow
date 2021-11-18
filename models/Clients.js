const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientsSchema = new Schema ({
  company_name: { type: String, required: true},
  address: String,
  phone_number: { type: String, required: true},
  email: { type: String, required: true},
  contact: {
    full_name:String,
    phone_number: String,
    email: String,
    description: String,
  }
})

module.exports = mongoose.model('Clients',ClientsSchema)