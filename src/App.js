import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from "react-bootstrap";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import ContactUs from './Components/ContactUs';
import Logout from './Components/Logout';
import UploadCertificate from './Components/UploadCertificate';
import Report from './Components/Report';
import Verification from './Components/Verification'
import Register from "./Components/Register";
import Footer from "./Components/Footer";
// import { Progress } from "reactstrap";
// import ContactUs from './Components/ContactUs';
// import Report from './Components/Report'

const App = () => {

  return (
    <Fragment>
      {/* <Progress></Progress> */}
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadCertificate />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/progress" element={<Report />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/contactUs" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App;