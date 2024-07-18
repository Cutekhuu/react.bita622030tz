import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="nav">
           <ul>
            <li><Link to='/appoitment'>Make appoitment</Link></li>
            <li><Link to='/appoitmentList'>Appoitment List</Link></li>
            <li><Link to='/insurencedetail'>Insurence Details</Link></li> 
            <li><Link to='/insurencelist'>Insurence List</Link></li>          
            
           </ul>
        </div>
    );
}
export default Navbar;