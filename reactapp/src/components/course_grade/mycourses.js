import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import MyCourse from './mycourse';
//import 'bootstrap/dist/css/bootstrap.css';
import './mycourses.css';

export default function Mycourses() {
  return (
    <>
      <div className="title">
        
        <p className="page-name">My Enrollments</p>
      </div>
      <div className="course-content">
        <Outlet/>
      </div>

      </>
    
  );
}