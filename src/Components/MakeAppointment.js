import React, { useState } from 'react';
import './MakeAppointment.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';

const MakeAppointment = () => {
  const [showForm, setShowForm] = useState(false);
  const [idNumber, setIdNumber] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [disease, setDisease] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hapa unaweza kuongeza logic ya kuhifadhi au kutuma data
    console.log({ idNumber, appointmentDate, disease });
  };
  const navigate=useNavigate();

  const handleMakeAppointmentClick = () => {
    setShowForm(true);
  };

  return (
    
  
    <div>
        <Header></Header>
        <Navbar></Navbar>
        <div className='container'>
      <h1>Make an Appointment</h1>
      {!showForm ? (
 <button 
 onClick={handleMakeAppointmentClick}>Make Appointment</button>
) : (
 <form onSubmit={handleSubmit}>
   <div>
     <label>ID Number:</label>
     <input
       type="text"
       value={idNumber}
       onChange={(e) => setIdNumber(e.target.value)}
       required
     />
   </div>
   <div>
     <label>Date of Appointment:</label>
     <input
       type="date"
       value={appointmentDate}
       onChange={(e) => setAppointmentDate(e.target.value)}
       required
     />
   </div>
   <div>
   <label>Disease:</label>
     <input
       type="text"
       value={disease}
       onChange={(e) => setDisease(e.target.value)}
       required
     />
   </div>
   <button onClick={()=> navigate('/appoitmentList')}>Submit</button>
          
          </form>
        )}
        </div>
      </div>
    );
  };
  
  export default MakeAppointment;