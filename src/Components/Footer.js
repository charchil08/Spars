import React from "react";
import { GrInstagram, GrGithub, GrLinkedin } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImGoogle } from "react-icons/im";


const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-white" style={{
                   marginTop:"25px"
            }}>
                {/* <!-- Grid container --> */}
                <div className="contaiWner p-4 pb-0">
                    {/* <!-- Section: Social media --> */}
                    <section className="mb-4">
                        {/* <!-- Facebook --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 mx-3"
                            style={{
                                backgroundColor: "#3b5998",
                                borderRadius: "20%",
                            }}
                            href="https://m.facebook.com/profile.php?ref=wizard"
                            role="button"
                        ><FaFacebook size={30}></FaFacebook>            </a>

                        {/* <!-- Twitter --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 mx-3"
                            style={{
                                backgroundColor: "#55acee",
                                borderRadius: "20%",
                            }}
                            href="#!"
                            role="button"
                        >
                            <BsTwitter size={30} />            </a>

                        {/* <!-- Google --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 mx-3"
                            style={{
                                backgroundColor: "#dd4b39",
                                borderRadius: "20%",
                            }}
                            href="#!"
                            role="button"
                        >
                            <ImGoogle size={30}></ImGoogle>
                        </a>

                        {/* <!-- Instagram --> */}

                        <a
                            className="btn btn-primary btn-floating m-1 mx-3"
                            style={{
                                backgroundColor: "#ac2bac",
                                borderRadius: "20%",
                            }}
                            href="https://www.instagram.com/spars.project/"
                            role="button"> <GrInstagram
                                size={30} /></a>

                        {/* <!-- Linkedin --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 mx-3"
                            style={{
                                backgroundColor: "#0082ca",
                                borderRadius: "20%",
                            }}
                            href="#!"
                            role="button"
                        >
                            <GrLinkedin size={30}></GrLinkedin>
                        </a>
                        {/* <!-- Github --> */}
                        <a
                            className="btn btn-primary btn-floating m-1 mx-3"
                            style={{
                                backgroundColor: "#333333",
                                borderRadius: "20%",
                            }}
                            href="https://github.com/Sparsprojectsponser"
                            role="button"
                        >
                            <GrGithub size={30}></GrGithub>            </a>
                    </section>
                    {/* <!-- Section: Social media --> */}
                </div>
                {/* <!-- Grid container --> */}

                {/* <!-- Copyright --> */}
                <div
                    className="text-center p-3 text-dark my-2 "
                >
                    © 2020 Copyright :
                    <a className="text-dark" style={{
                        textDecoration: "none"
                    }} href="https://spars.com/">
                        🪙TEAM SPARS🪙
                    </a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
        </div>
    );
};

export default Footer;
