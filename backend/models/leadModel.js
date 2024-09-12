const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true }
});

module.exports = mongoose.model('Lead', leadSchema);
