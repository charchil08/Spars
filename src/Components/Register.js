import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


const Register = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3 mt-3 font-size" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="Text"
                                placeholder=" Enter First Name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3 mt-3" controlId="middleName">
                            <Form.Label>middle Name</Form.Label>
                            <Form.Control
                                type="Text"
                                placeholder=" Enter Middle Name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3 mt-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="Text"
                                placeholder=" Enter Last Name"
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="enrollmentNumber">
                    <Form.Label>Enrollment Number</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Enrollment Number"
                        required
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="branch">
                            <Form.Label>Branch</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Branch Name"
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="semester">
                            <Form.Label>Semester</Form.Label>
                            <Form.Control type="text" placeholder="Enter Semester" required />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPoints">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                        type="number"
                        maxLength={10}
                        placeholder="Enter Mobile Number"
                        required
                    />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="rePassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="Confirm Password" required />
                        </Form.Group>
                    </Col>
                </Row>

                <Button className="" variant="primary" type="submit" >
                    Register
                </Button>
            </Form>
        </Container>
    );
};

export default Register;