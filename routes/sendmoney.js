const express = require('express');
const router = express.Router();

const {
    addDetail,
    getDetail
    
} = require('../controllers/sendmoney');

router.post('/adddetail', addDetail);
router.get('/getdetail',getDetail);

module.exports = router;