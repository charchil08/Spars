import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const ContactUs = () => {
  return (
    <div className="contactUs">
      <Container className="mb-5">
        <h2 className="text-center text-primary mt-5">Contact Us</h2>
        <Form
          style={{
            fontSize: "1rem",
          }}
        >
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>User Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email Address"
              required
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Branch</Form.Label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">Branch</button>
                  </div>
                  <select className="custom-select" id="inputGroupSelect03">
                    <option selected>Choose...</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Mechanichal Engineering">Mechanichal Engineering</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical Engineering">Electrical Engineering</option>
                    <option value="Production Engineering">Production Engineering</option>
                  </select>
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Semester</Form.Label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">Semester</button>
                  </div>
                  <select className="custom-select" id="inputGroupSelect03">
                    <option selected>Choose...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Enrollment</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter your Enrollment"
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formPoints">
            <Form.Label>Add your Query</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="What's in your mind......"
              style={{ height: "100px" }}
            />
          </Form.Group>
          <Button className="" variant="primary" type="submit">
            submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactUs;
