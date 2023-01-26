import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
<<<<<<< HEAD
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";


const UploadCertificate = () => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [level, setLevel] = useState("")
    const [link, setLink] = useState("")
    const [points, setPoints] = useState()
    const [date, setDate] = useState()
    const [instruction, setInstruction] = useState("")
    const Navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        Navigate("/Verification")
    }

    return (
        <Container>
            <h2 className="text-center text-primary my-3">Certificate Details</h2>
            <Form style={{
                fontSize: '1rem'
            }} onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3 mt-3" controlId="EventName" >
                    <Form.Label>Name Of Event</Form.Label>
                    <Form.Control type="Text" placeholder=" Enter Event Name" value={name} onChange={(e) => setName(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="certificateNumber">
                    <Form.Label>Certificate Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Certificate Description"
                        value={desc} onChange={(e) => setDesc(e.target.value)}
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formFile">
                            <Form.Label>Choose level</Form.Label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary" type="button">Level</button>
                                </div>
                                <select className="custom-select" id="inputGroupSelect03">
                                    <option selected>Choose...</option>
                                    <option value="Zonal">Zonal</option>
                                    <option value="State">State</option>
                                    <option value="National">National</option>
                                    <option value="International">International</option>
                                </select>
                            </div>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formPoints">
                            <Form.Label>Points</Form.Label>
                            <Form.Control type="number" placeholder="Enter Points" required />
                        </Form.Group>

                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="validationLink">
                    <Form.Label>Validation Link</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Validation Link"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formFile">
                    <Form.Label>Upload Certificate</Form.Label>
                    <Form.Control type="file" placeholder="choose file" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPoints">
                    <Form.Label>Date of Event</Form.Label>
                    <Form.Control type="date" placeholder="Enter Points" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPoints">
                    <Form.Label>Special Instruction</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Description Of Event"
                        style={{ height: "100px" }}
                    />
                </Form.Group>

                <Button className="" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default UploadCertificate;
=======
import { useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UploadCertificate = () => {
    const history = useNavigate();

  const [certificateDetails, setCertificateDetails] = useState({
    eventName: "",
    certificateNumber: "",
    validationLink: "",
    points: 0,
    certificteFile: "",
    eventDate: "",
    descrpition: "",

    // bydefault feature formData
    formData: new FormData(),
  });

  const { formData } = certificateDetails;

  const handleInputs = (e) => {
    let name = e.target.name;

    // if there is file then e.target.files[0] will be selected or else as usual
    let value = name === "certificateFile" ? e.target.files[0] : e.target.value;

    // setting formData
    formData.set(name, value);

    // setting whole certificate details
    setCertificateDetails({ ...certificateDetails, [name]: value });
    return;
  };

  const postCertificate = async(e, data) => {
    e.preventDefault();

    // we're getting data
    console.log(data);

    // TODO: need to improve or better connect to back-end from here as we're getting an can not POST /upload
    const res =  fetch("/upload", {
      method: "POST",
      headers: {
        enctype: "multipart/form-data",
      },
      body: data,
    })
    //   .then((res) => res.json)
    //   .catch((err) => console.log(err));
    const dataRes = await res.json();
    if (!dataRes.status === 200 ) {
        toast.error('Invalid Inputs', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true, 
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        console.log("Invalid registration");
      } else {
        toast.success('Registration Successfull', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        console.log(" Upload Successfull");
  
        history("/dashboard");
      }
  };

  return (
    <Container>
        <ToastContainer />

      <h2 className="text-center text-primary my-3">Certificate Details</h2>
      <Form
        style={{
          fontSize: "1rem",
        }}
        method="POST"
        action="/upload"
        encType="multipart/form-data"
      >
        <Form.Group className="mb-3 mt-3" controlId="EventName">
          <Form.Label>Name Of Event</Form.Label>
          <Form.Control
            type="Text"
            placeholder=" Enter Event Name"
            name="eventName"
            value={certificateDetails.eventName}
            onChange={(e) => handleInputs(e)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="certificateNumber">
          <Form.Label>Certificate Number</Form.Label>
          <Form.Control
            type="text"
            name="certificateNumber"
            value={certificateDetails.certificateNumber}
            onChange={handleInputs}
            placeholder="Enter Certificate Number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationLink">
          <Form.Label>Validation Link</Form.Label>
          <Form.Control
            type="text"
            name="validationLink"
            value={certificateDetails.validationLink}
            onChange={handleInputs}
            placeholder="Enter Validation Link"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPoints">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Points"
            name="points"
            value={certificateDetails.points}
            onChange={handleInputs}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formFile">
          <Form.Label>Upload Certificate</Form.Label>
          <Form.Control
            type="file"
            placeholder="choose file"
            name="certificateFile"
            onChange={handleInputs}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPoints">
          <Form.Label>Date of Event</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter Points"
            name="eventDate"
            value={certificateDetails.eventdate}
            onChange={handleInputs}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPoints">
          <Form.Label>Special Instruction</Form.Label>
          <Form.Control
            as="textarea"
            name="descrpition"
            value={certificateDetails.descrpition}
            onChange={handleInputs}
            placeholder="Description Of Event"
            style={{ height: "100px" }}
          />
        </Form.Group>

        <Button
          className=""
          variant="primary"
          onSubmit={(e, formData) => postCertificate(e, formData)}
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default UploadCertificate;
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
