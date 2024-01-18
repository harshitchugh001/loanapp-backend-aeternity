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

exports.getDetail=async (req,res)=>{
   
}

