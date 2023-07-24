import React from 'react'
import './navbar.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import UserLogo from "./../../assets/user.png"
import { doLogout, isLoggedIn } from "../../auth";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([])
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
  }, []);
  const [login, setLogin] = useState(false)
  useEffect(() => {
    setLogin(isLoggedIn())
  }, [login])

  

  const logout = () => {
    doLogout(() => {
      //logged out
      setLogin(false)
      navigate("/")
    })
  }



  return (
    <div className='navbar'>
      <div className="app-name">
        <p className='app-name-text'>Admission Portal</p>
      </div>
      <div className="navbar-button-container" >
        <p onClick={()=>navigate("/main/profilePage")} className='navbar-button' ><img className="nav-icon" src={UserLogo}/>&nbsp;{users.firstname}</p>
        <p onClick={logout} className='navbar-button' >Logout</p>
      </div>
    </div>
  )
}
