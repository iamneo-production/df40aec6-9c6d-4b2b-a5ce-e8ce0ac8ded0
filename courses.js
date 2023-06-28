import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Course from './course';
import CourseDetails from './courseDetails';
import {Error} from './Error';
import back from './left-arrow.png';
import './courses.css';

export default function Courses() {
  return (
    <Router>
      <div className="title">
        <div className="back-btn">
          <img src={back} alt="" className="back" />
          <p className="text">&nbsp;back</p>
        </div>
        <p className="page-name">My Courses</p>
      </div>
      <div className="content">
        <Routes>
          
          <Route path="/courseDetails/:id" element={<CourseDetails />} />
          <Route path="/" element={<Course />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}
