var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entrySchema = new Schema({
  name: { type: String, required: true },
  parent: Schema.Types.ObjectId,
  priv: { type: Boolean, default: false },
  properties: Schema.Types.Mixed,
  created: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', entrySchema);