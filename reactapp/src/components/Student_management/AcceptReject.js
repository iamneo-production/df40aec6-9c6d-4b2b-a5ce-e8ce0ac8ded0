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