import React from "react";
import {FaHome, FaPhoneAlt, FaEnvelope, FaPrint} from 'react-icons/fa';
function Footer(){
    return (
        <div className="bg-dark">
        <div className="container">
            <div className="row py-5 text-white">
                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Company Name</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Services</h4>
                    <p>About</p>
                    <p>Return Policy</p>
                    <p>Customer Services</p>
                    <p></p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Useful Links</h4>
                    <p>Sitemap</p>
                    <p>Shipping Rates</p>
                    <p>Affilitate Program</p>
                    <p></p>
                </div>
                <div className="col-md-3 col-sm-12">
                    <h4 className="text-warning">Address</h4>
                    <FaHome className="me-2"/>John<br/>
                    <FaPhoneAlt className="me-2"/>+91 7466393792<br/>
                    <FaEnvelope className="me-2"/>example@gmail.com<br/>
                    <FaPrint className="me-2"/>1234567890<br/>
                </div>
            </div>
            <p className="text-white">&copy; 2025 SPA App. All rights reserved.</p>
         </div>  
         </div>
         
    
         
    )
}

export default Footer;
