const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    feedback: {type: String, required:true},
    entryDate: {type: Date, default:Date.now}
})


module.exports = mongoose.model('Contact', ContactSchema)