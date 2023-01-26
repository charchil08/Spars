const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { signup, signin, signout, isSignedIn } = require("../controllers/auth")


router.post("/signup", [
    check('firstname').isLength({ min: 3 }).withMessage("Name must be more than 2 characters"),
    check('email').isEmail().withMessage("email should be valid"),
    check('password').isLength({ min: 6 }).withMessage("password must 6 char long")
], signup)

router.post("/signin", [
    check('email').isEmail().withMessage("email should be valid"),
    check('password').isLength({ min: 1 }).withMessage("Wrong password")
], signin)

router.get("/signout", signout)


// exports all auth routers to app.js, works like /api/signup etc...
module.exports = router;