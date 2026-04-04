const mongoose = require('mongoose');

const pincodeSchema = new mongoose.Schema({
  pincode: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  officeName: {
    type: String,
    required: true,
    trim: true,
  },
  officeType: {
    type: String,
    trim: true,
  },
  deliveryStatus: {
    type: String,
    enum: ['Delivery', 'Non-Delivery'],
  },
  district: {
    type: String,
    required: true,
    trim: true,
  },
  taluk: {
    type: String,
    trim: true,
  },
  divisionName: {
    type: String,
    trim: true,
  },
  regionName: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  circle: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true
});

pincodeSchema.index({ state: 1, district: 1, taluk: 1 });
pincodeSchema.index({ pincode: 1 }, { unique: true });
pincodeSchema.index({ officeName: 'text', pincode: 'text' });

const Pincode = mongoose.model('Pincode', pincodeSchema, 'pincodes');

module.exports = Pincode;
