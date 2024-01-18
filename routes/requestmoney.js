const express = require('express');
const router = express.Router();

const {
    addDetail,
    getDetail
    
} = require('../controllers/requestmoney');

router.post('/adddetail', addDetail);
router.get('/getdetail',getDetail);

module.exports = router;