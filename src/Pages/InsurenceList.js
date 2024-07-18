import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function InsurenceList(){
    return(
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="container">
            <table className="table">
            <thead>
                <tr>
                    <th>NIDA ID:</th>
                    <th>Insurence ID:</th>
                </tr>
               

                    <tr>
                    <td>1</td>
                    <td>124344</td>
                    </tr>
                    
            
            </thead>
           </table>
            </div>
          
        </div>
    );
}
export default InsurenceList;