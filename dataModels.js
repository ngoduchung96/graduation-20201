const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserOnSchema = new Schema({
  name: String,
  phone: Number,
  address: String,
  fingerId: String,
  RFId: String,
  password: String,
  excessCash: Number,
  role: String,
  can: Number,
  bottle: Number,
  canPrice: Number,
  bottlePrice: Number,
  getVoucherHistory: Array
});

const Users = mongoose.model("users", UserOnSchema);

const WastebasketOnSchema = new Schema({
  address: String,
  name: String,
  status: {
    stuck: Boolean,
    full: Boolean
  }
});

const Wastebaskets = mongoose.model("wastebaskets", WastebasketOnSchema);

module.exports = { Users, Wastebaskets };
