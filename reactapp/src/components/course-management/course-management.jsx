import React from 'react';
import './course-management.css'

import { NavLink, Outlet } from 'react-router-dom';

export default function Coursemanagement() {
  return (
    <>
        <div className="title">
          <p className='page-name' >Course Management Page</p>
        </div>
        <div className="course-options">
          <div className="course-view">
            <NavLink className='option' to='/main/course-management' style={{textDecoration: "none"}}>View Courses</NavLink>
          </div>
          <div className="course-add">
            <NavLink className='option' to='/main/course-management/add-courses' style={{textDecoration: "none"}}>Add Courses</NavLink>
          </div>
        </div>
        <div className="coursemanagement-content">
          <Outlet/>
        </div>
    </>
  )
}
