import React, { useEffect, useState } from 'react';
import RegForm from './regform';
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../services/helper';
function Display() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasStudentId, setHasStudentId] = useState(false);
  let navigate = useNavigate();

  const [users, setUsers] = useState([])
  
  useEffect(() => { // fetch the user id from the local storage
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
  }, []);

  const checkStudentData = async ()  =>  {
    privateAxios.get(`/auth/admissions/student/${users.id}`).then(response => {
      if(response.data[0]!=undefined)
      {
        setHasStudentId(true);
      }
    })
    .catch(error => {
      if (error.response) {
        // If the API returns an error response (status code outside 200-299 range), the data may not exist
        console.log('Data may not exist:', error.response.data);
      } else if (error.request) {
        // If the request was made but no response was received, there's likely a network error
        console.log('Network error:', error.request);
      } else {
        // Something else went wrong while setting up the request
        console.log('Error:', error.message);
      }
    });
    setHasSubmitted(true); 
  }

  useEffect(() => {
    if(users.id!=undefined){
      checkStudentData();
    }  
  }, [users]);
  
  return (
    <div>
      {hasSubmitted && hasStudentId && <div class="container">
<br/><br/>
  <center>
    <div className=''>
  <p className='course-name'>You have filled the form already!</p>
  <button type="button" className="dark-btn" onClick={()=>{navigate("/main/track")}}>
    Track
  </button>
    </div>
  </center>
</div>}
      {hasSubmitted && !hasStudentId && <RegForm />}
    </div>
  )
}

export default Display;
