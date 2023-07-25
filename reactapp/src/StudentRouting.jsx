import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Error} from './components/course-management/Error';
import Navbar from './components/navbar/navbar';
import Studentdashboard from './components/stud_dashboard/Studentdashboard';
import Studentsidebar from './components/stud_dashboard/Studentsidebar';
import Courses from './components/courses/courses';
import Course from './components/courses/course';
import Courseinfo from './components/courses/course-info'
import RegForm from './components/Admissionform/regform';
import Track from './components/Tracks/Track';
import Noti from './components/notify/Noti';
import ProfilePage from './components/stud_dashboard/ProfilePage';
import MyCourses from './components/course_grade/mycourses';
import MyCourse from './components/course_grade/mycourse';
import CourseDetails from './components/course_grade/courseDetails';
import Display from './components/Admissionform/display';
const StudentRouting = () => {
  return (
    <>


<div className="container-fluid p-0 m-0">
        <div className="header p-0 m-0">
          <Navbar/>
        </div>
        <div className="body">
            <div className="row p-0 m-0" style={{height:"90vh"}}>
              <div className="col-2 p-0 m-0 "  style={{height:"90vh"}}>
                <Studentsidebar />
              </div>
              <div className="col-10 p-0 m-0" style={{height:"90vh"}}>
                <Routes>
                  <Route path="*" element={<Error/>}/>
                  <Route path="/" element={<Studentdashboard />} />
                  <Route path="/dashboard" element={<Studentdashboard/>} />
                  <Route path="/apply" element={<Display/>} />
                  <Route path="/track" element={<Track />} />
                  <Route path="/notify" element={<Noti />} />
                  <Route path="/profilepage" element={<ProfilePage />} />

                  <Route path="/myenrollment" element={<MyCourses />} >
                    <Route path="courseDetails/:id" element={<CourseDetails />} />
                    <Route path="" element={<MyCourse />} />
                  </Route>

                  <Route path="/courses" element={<Courses />} >
                    <Route path="course-info/:id" exact={true} element={<Courseinfo/>} />
                    <Route path='' element={<Course/>} />
                    <Route path="*" element={<Error/>}/>
                  </Route>
                </Routes>                
              </div>
            </div>
        </div>  
      </div>






    
      </>
  )
}

export default StudentRouting