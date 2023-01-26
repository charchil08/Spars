import React, { Fragment } from "react";
import { Container, Image } from "react-bootstrap";
import image from "../assets/dashboardImg.png"
import Login from "./Login";


const Dashboard = () => {
   
    return (
        <Fragment>
            <Container className="my-4" style={{
                width: "100%",
                height: "70vh",
                // border: "2px solid black",
                display : "flex",
                justifyContent:"center",
                alignItems : "center"
            }}>
                <div className="mr-4" style={
                    {
                        width: "600px"
                    }
                }>
                    <Image src={image} className="mb-4" style={{
                        marginLeft : "100px"
                    }} />
                    <div>
                        <p className="text-justify font-weight-light">
                            Project SPARS is made with a view to help the students as well as faculties to <span className="text-info font-weight-bold">track records of their certificate</span>, evaluate uploaded certificate through some AI techniques and finally update the points into their dashboards which will help to track and compare their performance.
                        </p>
                    </div>
                </div>
                <div className="ml-4" style={{
                    paddingLeft : "50px"
                }}>
                    <Login />
                </div>
            </Container>
        </Fragment>
    )
}

export default Dashboard;