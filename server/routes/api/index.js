var express = require('express');
var router = express.Router();
var emailRoute = require('./email');

router.use("/email" ,emailRoute);

module.exports = router;
