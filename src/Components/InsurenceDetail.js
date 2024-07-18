import React, { useState } from 'react';
import './InsurenceDetail.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Header from "./Header";

function InsurenceDetail(){
    const [showForm, setShowForm] = useState(false);
    const [idNumber, setIdNumber] = useState('');
    const [insurenceID, setinsurenceID] = useState('');
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Hapa unaweza kuongeza logic ya kuhifadhi au kutuma data
      console.log({ idNumber,insurenceID});
    };
    const navigate=useNavigate();
  
    const handleDetail = () => {
      setShowForm(true);
    };
    return(
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="container">
                <h1> Insurence Detail</h1>
               
      {!showForm ? (
        <button 
        onClick={handleDetail}>Insurence Detail</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>NIDA ID:</label>
            <input
              type="text"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Insurence ID:</label>
            <input
              type="text"
              value={insurenceID}
              onChange={(e) => setinsurenceID(e.target.value)}
              required
            />
          </div>
                   
          <button onClick={()=> navigate('/insurencelist')}>Submit</button>
          
        </form>
      )}
          
            </div>
          
        </div>
    );
}
export default InsurenceDetail;