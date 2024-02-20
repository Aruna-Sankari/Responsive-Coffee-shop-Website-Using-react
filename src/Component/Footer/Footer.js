import React from 'react'
import './Footer.css'
import { FaLocationPin } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const Footer=()=> {
        return (
            <div>
                <div className="footer">
                    <div className="footer-row">
                        <div className="footer-col">
                            <h4>About</h4>
                            <p className="paragraph">
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u
                            </p>
                        </div>

                        <div className="footer-col">
                            <h4>Menu</h4>
                            <div className="footer-links">
                                <a href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Gallery</a>
                                <a href="#">Services</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Useful Link</h4>
                            <div className="useful-links">
                                <a href="#">Adipcing</a>
                                <a href="#">Elit,send do</a>
                                <a href="#">Elumod</a>
                                <a href="#">Tempor</a>
                                <a href="#">Incididunt</a>
                            </div>
                        </div>

                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <div className="location-links">
                                <p><FaLocationPin /><span>Address:Lorem Ipsum</span></p>
                                <p><MdCall /><span>Call:01 1234567890</span></p>
                                <p><FiMail /><span>Email:mail@domain.com</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-text">
                    <p>2023 All Rights Reserved.By <span> HTML Design</span></p>
                </div>

            </div>
        )

}
export default Footer;