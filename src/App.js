import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router,Route,Routes, BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import './App.css';
import Login from './Components/Login';
import Registration from './Pages/Registration';
import Mains from './Pages/Mains';
import MakeAppointment from './Components/MakeAppointment';
import AppointmentList from './Pages/AppoitmentList.js';
import InsurenceDetail from './Components/InsurenceDetail.js';
import InsurenceList from './Pages/InsurenceList.js';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path ="/" element={<Login/>}/>
        <Route path ="/appoitment" element={<MakeAppointment/>}/>
        <Route path ="/appoitmentList" element={<AppointmentList/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path='/Mains/*' element={<Mains/>}/>
        <Route path="/insurencedetail" element={<InsurenceDetail/>}/>
        <Route path ='/insurencelist' element={<InsurenceList/>}/>
       
        </Routes>

    </BrowserRouter>
   
    

  );
}

export default App;
