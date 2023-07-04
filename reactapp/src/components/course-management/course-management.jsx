import React from 'react';
import './course-management.css'
import back from '../../assets/left-arrow.png'
import AddCourses from './add-courses'
import ViewCourses from './view-courses'
import Editcourse from './edit-course'
import { Error } from './Error';

import {BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

export default function Coursemanagement() {
  return (
    <>
        <div className="title">
          <div className="back-btn">
            <img src={back} alt="" className='back'/>
            <p className='text' >&nbsp;back</p>
          </div>
          <p className='page-name' >Course Management Page</p>
        </div>
        <div className="options">
          <div className="view">
            <NavLink className='option' to='/' >View Courses</NavLink>
          </div>
          <div className="add">
            <NavLink className='option' to='/add-courses'>Add Courses</NavLink>
          </div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/edit-course/:id" exact={true} element={<Editcourse/>} />
            <Route path='/' element={<ViewCourses/>} />
            <Route path='/add-courses' element={<AddCourses/>} />
            
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
    </>
  )
}
