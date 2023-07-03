import React from 'react'
import './courses.css'
import { Outlet } from 'react-router-dom';


export default function Courses() {
  return (
    <>
        <div className="title">
          {/* <div className="back-btn">
            <img src={back} alt="" className='back'/>
            <p className='text' >&nbsp;back</p>
          </div> */}
          <p className='page-name' >Courses</p>
        </div>
        <div className="course-content">
          <Outlet/>
        </div>
    </>
  )
}
