import React, {useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom"
import Register from "./Register";


const Login = () => {
    
        const [user,setUser] = useState('er.charchilkajaliya@gmail.com')
        const [Password, setPassword] = useState('12345678')
        const Nevigate = useNavigate();
    
    return (
        <Container className="d-md-flex align-item-center justify-content-center" >
            <Form style={{
                fontSize: "1rem",
            }} className="my-4" >
                <h2 className="text-center text-primary my-3">Easy Login</h2>

                <Form.Group className="my-3" controlId="formName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Address" value={user} onChange={e=>setUser(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label> Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={Password} onChange={e=>setPassword(e.target.value)} required />
                </Form.Group>
                <Container style={{
                    width:"100%",
                    display : "flex",
                    flexDirection:"row",
                    justifyContent : "center",
                    alignItems : "cneter"
                }}>
                    <Button className="mr-3" variant="primary" type="submit" onClick={()=>Nevigate("/Upload")} >
                        Login
                    </Button>
                    <Button onClick={()=>Register("/Register")} className="mr-3" variant="warning" disabled 
                    // onClick={()=>Nevigate("/ForgatePassword")}
                    >
                        Forgot Password
                    </Button>
                    <Button className="mr-auto" variant="success" onClick={()=>Nevigate("/Register")} >
                        Register
                    </Button>
                </Container>
            </Form>
        </Container>
    );
};

export default Login;