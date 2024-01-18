const RequestMoney = require('../model/requestmoney');

exports.addDetail=async (req,res)=>{
    const { address, amount, message } = req.body;
    const newdetail = new RequestMoney({
        address:address,
        amount:amount,
        message:message,
    });
    console.log(newdetail);

    await newdetail.save();

    return res.status(201).json({ message: 'Added successfully.' });
}

exports.getDetail = async (req, res) => {
    try {
      const allDetails = await RequestMoney.find({});
      return res.status(200).json({ details: allDetails });
    } catch (error) {
      console.error('Error fetching details:', error);
      return res.status(500).json({ error: 'Internal Server Error.' });
    }
  };

