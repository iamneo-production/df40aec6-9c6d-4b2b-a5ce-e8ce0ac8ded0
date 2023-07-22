import React from 'react'
import LoginLogo from "./../assets/login.png"
import SignupLogo from "./../assets/signup.png"
import AdminLogo from "./../assets/admin.png"
import './Land.css'
import { useNavigate } from 'react-router-dom'
function Land() {
  
  const navigate = useNavigate();
  return (
    <div className='landing-container'>
      <div className='landing-card'>
        <div><p className='app-name'>ADMISSION PORTAL</p></div>
        <div className='landing-button-card'>
          <div className='glass-btn' onClick={()=>{navigate("/login")}}>
            <img className="icon" src={LoginLogo}/>
            <p className='btn-text'>LOG IN</p>
          </div>
          <div className='glass-btn' onClick={()=>{navigate("/signup")}}>
            <img className="icon" src={SignupLogo}/>
            <p className='btn-text'>SIGN UP</p>
          </div>
          <div className='glass-btn' onClick={()=>{navigate("/admin-signup")}}>
            <img className="icon" src={AdminLogo}/>
            <p className='btn-text'>ADMIN</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Land
