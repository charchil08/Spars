import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  // const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
        toast.error('Invalid Details', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    } else if (res.status === 200) {
      // window.alert("Login Successful")
      toast.success("Login Successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // history("/upload")
    }
  };

  return (
    <Container className="d-md-flex align-item-center justify-content-center">
      <ToastContainer />
      <Form
        method="POST"
        style={{
          fontSize: "1rem",
        }}
        className="my-4"
      >
        <h2 className="text-center text-primary my-3">Easy Login</h2>

        <Form.Group className="my-3" controlId="formName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label> Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Container
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            className="mr-3"
            variant="primary"
            type="submit"
            onClick={loginUser}
          >
            Login
          </Button>
          <Button
            onClick={() => Register("/Register")}
            className="mr-3"
            variant="warning"
            disabled
            // onClick={()=>history("/ForgatePassword")}
          >
            Forgot Password
          </Button>
          <Button
            className="mr-auto"
            variant="success"
            onClick={() => history("/Register")}
          >
            Register
          </Button>
        </Container>
      </Form>
    </Container>
  );
};

export default Login;
