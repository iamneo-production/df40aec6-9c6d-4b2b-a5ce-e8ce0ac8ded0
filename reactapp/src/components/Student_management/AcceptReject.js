import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {privateAxios} from "./../../services/helper"
export default function AcceptReject({ id }) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    loadStatus();
  }, []);

  const loadStatus = async () => {
    try {
      const response = await privateAxios.get(`/auth/admissions/student/${id}`);
      const admission = response.data;
      setStatus(admission[0].status.substr(11,8));
      console.log(status);
    } catch (error) {
      setStatus("Not Applied");
      console.log(error);
    }
  };

  const handleAccept = async () => {
    try {
      await privateAxios.put(`/auth/admissions/student/${id}/status`, {
        status: 'ACCEPTED',
      });
      setStatus('ACCEPTED');
    } catch (error) {
      console.log(error);
    }
  };

  const handleReject = async () => {
    try {
      await privateAxios.put(`/auth/admissions/student/${id}/status`, {
        status: 'REJECTED',
      });
      setStatus('REJECTED');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2></h2>
      <div><h2>Status: {status}</h2></div>
      {(status!="Not Applied") && <>
          <button className='btn btn-success mx-2 my-2' onClick={handleAccept}>
            ACCEPT
          </button>
          <button className='btn btn-secondary mx-2 my-2' onClick={handleReject}>
            REJECT
          </button> </>
}
          
    </div>
  );
}









// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function AcceptReject({ id }) {
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     loadStatus();
//   }, []);

//   const loadStatus = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8080/admissions/${id}`);
//       const admission = response.data;
//       setStatus(admission.status);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleAccept = async () => {
//     try {
//       await axios.put(`http://localhost:8080/admissions/${id}/status`, 'ACCEPTED');
//       setStatus('ACCEPTED');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleReject = async () => {
//     try {
//       await axios.put(`http://localhost:8080/admissions/${id}/status`, 'REJECTED');
//       setStatus('REJECTED');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <div>Status: {status}</div>
//       <button onClick={handleAccept}>Accept</button>
//       <button onClick={handleReject}>Reject</button>
//     </div>
//   );
// }










// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// export default function AcceptReject({ id }) {
//   const [status, setStatus] = useState('');

//   useEffect(() => {
//     loadStatus();
//   }, []);

//   const loadStatus = async () => {
//     const response = await axios.get(`http://localhost:8080/admissions/${id}`);
//     const admission = response.data;
//     const parsedStatus = JSON.parse(admission.status);
//     setStatus(parsedStatus.status);


//     console.log(response.data)
//     console.log(parsedStatus)
//     console.log(status)

//   };

//   const handleAccept = async () => {
//     const updatedStatus = { status: 'ACCEPTED' };
//     await axios.put(`http://localhost:8080/admissions/${id}/status`, JSON.stringify(updatedStatus));
//     console.log(updatedStatus)
//     setStatus(updatedStatus.status);
//   };

//   const handleReject = async () => {
//     const updatedStatus = { status: 'REJECTED' };
//     await axios.put(`http://localhost:8080/admissions/${id}/status`, JSON.stringify(updatedStatus));
//     setStatus(updatedStatus.status);
//   };

//   return (
//     <div>
//       <div>Status: {status}</div>
//       <button onClick={handleAccept}>Accept</button>
//       <button onClick={handleReject}>Reject</button>
//     </div>
//   );
// }










// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';

// export default function AcceptReject({id}) {
//     const [status,setStatus]=useState("");

//     useEffect(() => {
//         loadStatus();
//       }, []);
      
//       const loadStatus =async ()=>{
//         const sresult = await axios.get(`http://localhost:8080/admissions/${id}`)
//         setStatus(sresult.data)
//       }
//       console.log(status);
//   return (
//     <div>
       
      
//     </div>
//   )
// }
