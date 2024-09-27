const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: {type: String,required: true },
    email: {type: String,require: true
    },
    phone: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
})

module.exports = mongoose.model('Appointment', appointmentSchema);
 