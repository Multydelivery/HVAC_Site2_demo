
const Appointments = require('../model/appointmentModels');
const path = require('path');
require('dotenv').config();

const {MailtrapTransport} = require('mailtrap');
const nodemailer = require('nodemailer');

const TOKEN = process.env.MAIL_TOKEN;

const transport = nodemailer.createTransport(
    MailtrapTransport({
      token: TOKEN,
    })
  );

  const sender = {
    address: "hello@demomailtrap.com",
    name: "HVAC Demo site 2",
  };

exports.scheduleService = async (req, res) => {
   const { name, email, phone, date } = req.body;

   let scheduleEmailText = `We have received your request to schedule an appoinment on ${date}. We will contact you a call at ${phone} to find a time that works for you.
   Sincerely, HVAC Demo site 2`;

   try {
 

        transport.sendMail({
            from: sender,
            to: email,
            subject: "Appointment Scheduled",
            text: scheduleEmailText,
            category: "appointment",
            });





        res.sendFile(path.join(__dirname, '../views/bookResult.html'));
   } catch (error) {
      console.log(error)
      res.sendFile(path.join(__dirname, '../views/bookError.html'));
   }
} 

exports.requestQuote = async (req, res) => {
    const { name, email, service, message } = req.body;

    let quoteEmailText = `${name}, We have received your request for a quote. We will contact you to discuss the details of your ${service}.
    Your message: ${message}
    Sincerely, HVAC Demo site 2`;

    try {
        transport.sendMail({
            from: sender,
            to: email,
            subject: "Quote Requested",
            text: quoteEmailText,
            category: "quote",
            });

        res.sendFile(path.join(__dirname, '../views/bookResult.html'));
    } catch (error) {
        console.log(err)
        res.sendFile(path.join(__dirname, '../views/bookError.html'));
    }
}



