import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './Track.css';
import { privateAxios } from '../../services/helper';

function Track() {
  const [admissionStatus, setAdmissionStatus] = useState('');
  const [users, setUsers] = useState([])
  
  
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
  }, []);

  const loadStatus = async () => {
    try{
      const response= await privateAxios.get(`/auth/admissions/student/${users.id}`)
      if(response.data[0].status=="Pending"){
        setAdmissionStatus("Pending");
      }
      else{
        setAdmissionStatus(response.data[0].status.substr(11,8));
      }
    }
    catch(error){
      console.log(error);
      setAdmissionStatus("Not Applied");
    } 
  };

  useEffect(() => {
    if(users.id!=undefined){
      loadStatus();
    }
    //console.log(users.id);
    //console.log(admissionStatus);
  }, [users.id]);


  //console.log(admissionStatus);
  return (
    <div className="container">
      <div className="form-container">
      <h1 className="heading">Track Admission Status</h1>

      {/* <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            className="form-control input"
            id="Id"
            value={Id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        
        <button type="submit" className="dark-btn">
          Submit
        </button>
      </form> */}

       {(admissionStatus!="") && (
        <div className="status" >
          <center>
        <p className='course-name'>Admission Status: {admissionStatus}</p> 
        </center>
        </div>
       )} 
      </div>
    </div>
  );
}

export default Track;