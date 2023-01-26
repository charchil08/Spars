import React, { Fragment } from "react";
import { Container, Table } from "react-bootstrap";
import certificateData from "../Context/certificateData";

const Verification = () => {
    return (
        <Fragment>
            <Container style={{
                marginBottom: "10rem"
            }}>
                <h3 className="my-3 text-primary text-center">Certificate Detail</h3>
                <Table responsive="md" hover bordered size="lg" className="my-3 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Certificate</th>
                            <th>Level</th>
                            <th>Points</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            certificateData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.sn}</td>
                                    <td>{data.desc}</td>
                                    <td>{data.level}</td>
                                    <td>{data.points}</td>
                                    <td>{data.date}</td>
                                    <td>{data.status}</td>
                                    <td>{data.remarks}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
}

export default Verification;