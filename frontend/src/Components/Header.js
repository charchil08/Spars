import React, { Fragment } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"


const Header = () => {

        const home = useNavigate();
<<<<<<< HEAD
=======
        // const logout = ()=>{
             
        // }
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
    return (
        <Fragment>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"onClick={()=>home("/")} className='text-dark'>SPARS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link href="/upload">Upload</Nav.Link>
                            <Nav.Link href="/verification">Verification</Nav.Link>
                            <Nav.Link href="/progress">Progress</Nav.Link>
                            <Nav.Link href="/contactUs">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
<<<<<<< HEAD
                            <Nav.Link href="#deets" disabled>Charchil Chetankumar Kajaliya</Nav.Link>
                            <Button variant="danger" size="sm" className="mx-3 my-1">Log out</Button>
                        </Nav>
                    </Navbar.Collapse>
=======
                            {/* <Nav.Link href="#deets" disabled>Charchil Chetankumar Kajaliya</Nav.Link> */}
                            <Button variant="danger" size="sm" className="mx-3 my-1"
                             href="/logout"
                            >Log out</Button>
                        </Nav>
                    </Navbar.Collapse> 
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Header;