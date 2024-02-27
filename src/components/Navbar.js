import React from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa6";
import '../styles/Navbar.css';

const Navbar=()=>{
    return(
        <div className="navbar">
             <div className="logo">
                <i><FaCanadianMapleLeaf size={30}/></i>
                <h1>Blogster</h1>
             </div>
             <div className="link-div">
                <button id="About-btn">About Us</button>
                <button id="Start-btn">Get Started</button>
             </div>
        </div>
    );
};

export default Navbar;