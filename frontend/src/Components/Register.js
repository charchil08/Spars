<<<<<<< HEAD
import React from "react";
=======
import React, { useState } from "react";
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
<<<<<<< HEAD


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
=======
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    enrollment: "",
    branch: "",
    semester: "",
    email: "",
    mobile: "",
    password: "",
    cPassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();
    const {
      firstname,
      middlename,
      lastname,
      enrollment,
      branch,
      semester,
      email,
      mobile,
      password,
      // cPassword,
    } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        middlename,
        lastname,
        enrollment,
        branch,
        semester,
        email,
        mobile,
        password,
        // cPassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
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
      console.log(" registration done");

      history("/dashboard");
    }
  };
  return (
    <Container>
                  <ToastContainer />

      <section>
        <Form method="POST">
          <Row>
            <Col>
              <Form.Group
                className="mb-3 mt-3 font-size signup-form"
                controlId="firstName"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="Text"
                  name="firstname"
                  value={user.firstname}
                  onChange={handleInputs}
                  placeholder=" Enter First Name"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3 mt-3" controlId="middleName">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="Text"
                  name="middlename"
                  value={user.middlename}
                  onChange={handleInputs}
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
                  name="lastname"
                  value={user.lastname}
                  onChange={handleInputs}
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
              name="enrollment"
              value={user.enrollment}
              onChange={handleInputs}
              placeholder="Enter Enrollment Number"
              required
            />
          </Form.Group>
          <Row>
            <Col>
              {/* <Form.Group className="mb-3" controlId="branch">
                <Form.Label>Branch</Form.Label>
                <Form.Control
                  type="text"
                  name="branch"
                  value={user.branch}
                  onChange={handleInputs}
                  placeholder="Enter Branch Name"
                  required
                />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Branch</Form.Label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">
                      Branch
                    </button>
                  </div>
                  <select
                    className="custom-select"
                    id="inputGroupSelect03"
                    name="branch"
                    value={user.branch}
                    onChange={handleInputs}
                  >
                    <option selected>Choose...</option>
                    <option value="Information Technology">
                      Information Technology
                    </option>
                    <option value="Mechanichal Engineering">
                      Mechanichal Engineering
                    </option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Electrical Engineering">
                      Electrical Engineering
                    </option>
                    <option value="Production Engineering">
                      Production Engineering
                    </option>
                  </select>
                </div>
              </Form.Group>
            </Col>
            <Col>
              {/* <Form.Group className="mb-3" controlId="semester">
                <Form.Label>Semester</Form.Label>
                <Form.Control
                  type="text"
                  name="semester"
                  value={user.semester}
                  onChange={handleInputs}
                  placeholder="Enter Semester"
                  required
                />
              </Form.Group> */}
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Semester</Form.Label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary" type="button">
                      Semester
                    </button>
                  </div>
                  <select
                    className="custom-select"
                    id="inputGroupSelect03"
                    name="semester"
                    value={user.semester}
                    onChange={handleInputs}
                  >
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
          </Row>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
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
              name="mobile"
              value={user.mobile}
              onChange={handleInputs}
              maxLength={10}
              placeholder="Enter Mobile Number"
              required
            />
          </Form.Group>

          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                  placeholder="Password"
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              {/* <Form.Group className="mb-3" controlId="rePassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="cPassword"
                  value={user.cPassword}
                  onChange={handleInputs}
                  placeholder="Confirm Password"
                  required
                />
              </Form.Group> */}
            </Col>
          </Row>

          <Button
            className=""
            variant="primary"
            value="register"
            onClick={PostData}
            type="submit"
          >
            Register
          </Button>
        </Form>
      </section>
    </Container>
  );
};

export default Register;
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
