import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
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