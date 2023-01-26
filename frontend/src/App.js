import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { } from "react-bootstrap";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard";
import ContactUs from './Components/ContactUs';
<<<<<<< HEAD
=======
import Logout from './Components/Logout';
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
import UploadCertificate from './Components/UploadCertificate';
import Report from './Components/Report';
import Verification from './Components/Verification'
import Register from "./Components/Register";
import Footer from "./Components/Footer";
<<<<<<< HEAD
import { Progress } from "reactstrap";
=======
// import { Progress } from "reactstrap";
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
// import ContactUs from './Components/ContactUs';
// import Report from './Components/Report'

const App = () => {

  return (
    <Fragment>
<<<<<<< HEAD
=======
      {/* <Progress></Progress> */}
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadCertificate />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/progress" element={<Report />} />
        <Route path="/register" element={<Register />} />
<<<<<<< HEAD
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/progress" element={<Progress />} />
=======
        <Route path="/logout" element={<Logout />} />
        <Route path="/contactUs" element={<ContactUs />} />
        
>>>>>>> 7701bd6031929ec53f27fca180b7cce7b240bef0
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App;