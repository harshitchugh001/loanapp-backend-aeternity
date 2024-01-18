

const mongoose = require('mongoose');


const requestMoneySchema = new mongoose.Schema({
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


const RequestMoney = mongoose.model('RequestMoney', requestMoneySchema);

module.exports = RequestMoney;
