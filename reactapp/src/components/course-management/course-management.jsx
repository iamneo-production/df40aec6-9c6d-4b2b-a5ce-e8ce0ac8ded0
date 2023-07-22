import React from 'react';
import './course-management.css'
import back from '../../assets/left-arrow.png'
import AddCourses from './add-courses'
import ViewCourses from './view-courses'
import Editcourse from './edit-course'
import { Error } from './Error';

import { Route, Routes, NavLink, Outlet } from 'react-router-dom';

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
