const mongoose = require("mongoose");

// TODO: connect certificate model with user 
// TODO: complete authentication has to work in route
// TODO: display certificate details of user in report section 

const certificateSchema = mongoose.Schema({
    eventName: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
    },
    certificateNumber: {
        type: String,
        trim: true,
        required: true,
        maxLength: 12,
        unique: true
    },
    validationLink: {
        type: String,
        unique: true,
        trim: true
    },
    points: {
        type: Number,
        required: true,
        trim: true
    },
    eventDate: {
        type: Date,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        maxLength: 1000
    },
    certificateFile: {
        data: Buffer,
        contentType: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Certificate", certificateSchema);