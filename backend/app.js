// Requires import
require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const authRoutes = require("./routes/auth");
const cerficateRoutes = require("./routes/certificate");

//Set up default mongoose connection
const mongoDB = process.env.DATABASE;

mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// predefind or default middlewares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use(express.static('public'));

app.use("/api", authRoutes);
app.use("/api", cerficateRoutes);

// decide port number
const port = process.env.PORT || 8001

app.listen(port, () => {
    console.log("app is running on port", port)
});


