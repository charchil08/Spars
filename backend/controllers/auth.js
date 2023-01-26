const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require('jsonwebtoken');
const { expressjwt: expressJwt } = require("express-jwt");


const signup = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({
            err: errors.array()[0].msg
        })
    }
    const user = new User(req.body);
    user.save((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err: "Not able to save user in database"
            })
        }
        return res.json({
            firstname: user.firstname,
            enrollment: user.enrollment,
            email: user.email,
            _id: user._id
        })
    })
}

const signin = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            err: errors.array()[0].msg
        })
    }
    const { email, password } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "User email does not exist"
            })
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: "Email and password do not match"
            })
        }
        const token = jwt.sign({ _id: user._id }, process.env.SECRET)

        res.cookie("token", token, { expire: new Date() + 9999 })

        const { _id, firstname, enrollment, email, role } = user;

        return res.status(200).json({
            token,
            user: { _id, firstname, enrollment, email, role }
        })
    })
}

const signout = (req, res) => {
    res.clearCookie("token");
    return res.json({
        message: "User signed out Successfully"
    })
}

// Protected routes

// TODO: when token is not there then there is an error  No authorization token was found - need to solve
const isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth",
    algorithms: ["HS256"]
})

// Custom middleware
// profile property will be defined at front end site
const isAuthenticated = (req, res, next) => {
    let checker = req.profile && req.auth && (req.profile._id === req.auth._id)
    if (!checker) {
        return res.status(403).json({
            error: "Access denied, user not authenticated"
        })
    }
    next();
}

const isAdmin = (req, res, next) => {
    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "Acces denied, you are not admin"
        })
    }
    next();
}

module.exports = { signup, signin, signout, isSignedIn, isAuthenticated, isAdmin };