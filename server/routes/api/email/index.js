var express = require('express');
var router = express.Router();

const nodemailer = require('nodemailer');
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 60 minutes
    max: 3, // limit each IP to 3 requests per windowMs
    message:"Too many Appointments created from this IP, please try again after an hour"
  });

/**************************        UPDATE          **************************************/
router.post('/',limiter, async (req, res) => {
    try {
        const smtpTransport = nodemailer.createTransport(
            {
                service: 'Gmail',
                type: "SMTP",
                host: "smtp.gmail.com",
                secure: true,
                auth:
                {
                    user: process.env.ACCOUNTEMAIL,
                    pass: process.env.ACCOUNTPASS
                }
            });
            smtpTransport.sendMail({
                from: 'senecaemailer@gmail.com',
                 to: "manager@senecahwc.com",
                subject: 'Appointment From Website Seneca, Created on :'+new Date().toLocaleDateString(),
                text:   'Email: ' +req.body.email+'. \n\n'+
                'FULLNAME: ' +req.body.fullname+'. \n\n'+
                'PHONE: ' +req.body.phone+'. \n\n'+
                'DATE: ' +req.body.date+'. \n\n'
            });
            if (smtpTransport) {
                res.status(200).json({"status": 'SEND', "msg": "Appointment was Sent Please feel free to contact us by phone call if we dont manage to get an answer as soon as possible 😊" });
            } else {
                res.status(500).json({ "error": "Ops There was a Problem with the Server at Sending Email, Please Try Again Or Contact Us by Phone" });
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ "Error": "Algo Sucedio Mal intentar de nuevo." });
    }
});


module.exports = router
