const Certificate = require("../models/certificate");
const formidable = require('formidable');
const fs = require('fs');

const upload = (req, res) => {

    // fetching data of eventName, certificateNumber etc... textual data using fields
    // fetching file data using file

    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, file) => {

        // if there is any field is missing or file is not available or any error occur this message would redirected.
        if (!fields || !file || err) {
            return res.status(400).json({
                message: "Can not upload certificate"
            })
        }

        // if fields are available
        if (fields) {

            // we need to check that every required field value is there
            const { eventName, certificateNumber, points, eventDate } = fields;
            if (!eventName || !certificateNumber || !points || !eventDate) {
                return res.status(400).json({
                    message: "Fill require fields"
                })
            }
        }

        // if file is available
        if (file) {
            // we need to check file is less than 4MB in size
            if (file.certificateFile.size > 4000000) {
                return res.status(400).json({
                    message: "File size is too big"
                })
            }

            //initliazing new object of certificate to store data in Certificate collection 
            // by default passing fields in constructor
            const certificate = new Certificate(fields);

            // now we need to pass some useful data to front-end like buffer data and file type in database-collection Certificate
            certificate.certificateFile.data = fs.readFileSync(file["certificateFile"]["filepath"]);
            certificate.certificateFile.contentType = file["certificateFile"]["mimetype"];

            // saving certificate details in database
            certificate.save((err, certificate) => {
                if (err || !certificate) {
                    return res.status(400).json({
                        message: "Can not upload certificate"
                    })
                }

                // returning some valuable details to front-end
                const { eventName, certificateNumber, points, eventDate } = fields;
                return res.status(200).json({
                    eventName,
                    certificateNumber,
                    points,
                    eventDate,
                    contentType: certificate["certificateFile"]["contentType"],
                    data: certificate["certificateFile"]["data"]
                })
            })
        }
    })
}

const verification = (req, res) => {

    Certificate.find()
        .then(certificates => {
            return res.status(200).json({
                data: certificates
            })
        })
        .catch(err => {
            return res.status(500).send(err)
        })
}

module.exports = { upload, verification };
