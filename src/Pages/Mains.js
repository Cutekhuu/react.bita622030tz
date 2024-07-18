import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Registration from "./Registration";
import MakeAppointment from "../Components/MakeAppointment";
function Mains(){
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="Login">Login</Link></li>
                    <li><Link to="Registration">Registration</Link></li>
                    <li><Link to="MakeAppointment">MakeAppointment</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="Login" element={<Login/>}/>
                <Route path="Registration" element={<Registration/>}/>
                <Route path="MakeAppointment" element={<MakeAppointment/>}/>
            </Routes>
        </div>
    );
}
export default Mains;