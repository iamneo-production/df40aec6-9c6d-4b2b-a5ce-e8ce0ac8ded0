import React from 'react';
import './course-management.css'

import { NavLink, Outlet } from 'react-router-dom';

export default function Coursemanagement() {
  return (
    <>
        <div className="title">
          {/* <div className="back-btn">
            <img src={back} alt="" className='back'/>
            <p className='text' >&nbsp;back</p>
          </div> */}
          <p className='page-name' >Course Management Page</p>
        </div>
        <div className="options">
          <div className="view">
            <NavLink className='option' to='/course-management' style={{textDecoration: "none"}}>View Courses</NavLink>
          </div>
          <div className="add">
            <NavLink className='option' to='/course-management/add-courses' style={{textDecoration: "none"}}>Add Courses</NavLink>
          </div>
        </div>
        <div className="coursemanagement-content">
          <Outlet/>
        </div>
    </>
  )
}
