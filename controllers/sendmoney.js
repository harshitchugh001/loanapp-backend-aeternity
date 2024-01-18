const SendMoney = require('../model/sendmoney');

exports.addDetail = async (req, res) => {
  const { senderaddress, receiveraddress, amount, transactionId } = req.body;
  const newDetail = new SendMoney({
    senderaddress: senderaddress,
    receiveraddress: receiveraddress,
    amount: amount,
    transactionId: transactionId,
  });

  try {
    await newDetail.save();
    return res.status(201).json({ message: 'Added successfully.' });
  } catch (error) {
    console.error('Error adding detail:', error);
    return res.status(500).json({ error: 'Internal Server Error.' });
  }
};

exports.getDetail = async (req, res) => {
  try {
    const allDetails = await SendMoney.find({});
    return res.status(200).json({ details: allDetails });
  } catch (error) {
    console.error('Error fetching details:', error);
    return res.status(500).json({ error: 'Internal Server Error.' });
  }
};
