const mongoose = require("mongoose");
const { createHmac } = require("node:crypto")
const { v4: uuidv4 } = require('uuid')
const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        trim: true,
        maxLength: 32
    },
    middlename: {
        type: String,
        trim: true,
        maxLength: 32
    },
    lastname: {
        type: String,
        require: true,
        trim: true,
        maxLength: 32
    },
    enrollment: {
        type: String,
        require: true,
        trim: true,
        maxLength: 12,
        minLength: 12,
        unique: true
    },
    branch: {
        type: String,
        require: true,
        trim: true
    },
    semester: {
        type: Number,
        required: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 10
    },
    encrypt_password: {
        type: String,
        required: true
    },
    // confirm password will be handle by front end only.
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },

    // relation between user and certificates they have 
    certificates: [{
        type: ObjectId,
        ref: "Certificate"
    }]
}, { timestamps: true })

userSchema.virtual("password")
    .set(function (password) {
        this._password = password;
        this.salt = uuidv4();
        this.encrypt_password = this.securePassword(password);
    })
    .get(function () {
        return this._password;
    })

userSchema.methods = {

    authenticate: function (password) {
        return this.securePassword(password) === this.encrypt_password;
    },

    securePassword: function (plainpassword) {
        if (!plainpassword) {
            return "";
        }
        try {
            return createHmac('sha256', this.salt).update(plainpassword).digest('hex');
        } catch (error) {
            return "";
        }
    }
}

module.exports = mongoose.model("User", userSchema)