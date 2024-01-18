

const mongoose = require('mongoose');


const SendtMoneySchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});


const SendMoney = mongoose.model('sendMoney', SendMoneySchema);

module.exports = SendMoney;
