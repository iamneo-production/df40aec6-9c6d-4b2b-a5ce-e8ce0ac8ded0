import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./notification.css"
import { privateAxios } from '../../services/helper';
const Noti = () => {
  const [noti, setNoti] = useState([]);

  useEffect(() => {
    privateAxios.get('/auth/notification')
      .then(response => {
        setNoti(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='first' style={{ textAlign: "center", height:"90vh", overflow: "hidden"}}>
      <p className="noti-page-name" >NOTIFICATIONS</p>
      <div className='notification-container' id='notif' >
        {noti.map(notifi => (
          <div className="notification-card" key={notifi.id}>
            <p className='notification-name'>{notifi.title}</p>
            <p className='notification-details'>{notifi.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noti;