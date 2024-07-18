import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Header from "../Components/Header";

function AppointmentList(){
    return(
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="container">
            <table className="table">
            <thead>
                <tr>
                    <th>ID Number</th>
                    <th>Date of Appointment </th>
                    <th>Disease</th>
                </tr>
               

                    <tr>
                    <td>1</td>
                    <td>124344</td>
                    <td>homa</td>
                    </tr>
                    
            
            </thead>
           </table>
            </div>
          
        </div>
    );
}
export default AppointmentList;