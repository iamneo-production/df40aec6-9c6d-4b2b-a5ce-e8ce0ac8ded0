import React from 'react'
import './courses.css'
import { Error } from '../course-management/Error';
import { Route, Routes, NavLink } from 'react-router-dom';
import back from '../../assets/left-arrow.png'
import Course from './course';
import Courseinfo from './course-info'

export default function Courses() {
  return (
    <>
    <div className="title">
          <div className="back-btn">
            <img src={back} alt="" className='back'/>
            <p className='text' >&nbsp;back</p>
          </div>
          <p className='page-name' >Courses</p>
        </div>
        <div className="content">
          <Routes>
            <Route path="/course-info/:id" exact={true} element={<Courseinfo/>} />
            <Route path='/' element={<Course/>} />
            <Route path="*" element={<Error/>}/>
          </Routes>
        </div>
    </>
  )
}
