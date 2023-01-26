const express = require("express");
const { isSignedIn } = require("../controllers/auth");
const router = express.Router();
const { upload, verification } = require("../controllers/certificate");

router.post("/upload", isSignedIn, upload);

router.get("/verification", isSignedIn, verification)

module.exports = router;