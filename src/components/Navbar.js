import React from 'react'
import './navbar.css';
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="app-name">
        <p className='app-name-text'>Admission Portal</p>
      </div>
      <div className="profile" >
        <p onClick={()=>alert("clicked")} className='username' >soumo</p>
      </div>
    </div>
  )
}
