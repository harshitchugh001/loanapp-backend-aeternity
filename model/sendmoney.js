

const mongoose = require('mongoose');


const SendMoneySchema = new mongoose.Schema({
  senderaddress: {
    type: String,
    required: true,
  },
  receiveraddress: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
});


const SendMoney = mongoose.model('sendMoney', SendMoneySchema);

module.exports = SendMoney;
