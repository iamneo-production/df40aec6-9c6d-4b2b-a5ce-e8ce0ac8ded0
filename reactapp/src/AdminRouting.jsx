import React from 'react'
import Navbar from './components/navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCourses from './components/course-management/add-courses';
import ViewCourses from './components/course-management/view-courses';
import Editcourse from './components/course-management/edit-course';
import {Error} from './components/course-management/Error';
import Coursemanagement from './components/course-management/course-management'

import Admindashboard from './components/admin_dashboard/Admindashboard';
import Adminsidebar from './components/admin_dashboard/Adminsidebar';
import Create from './components/admin_dashboard/Create';
import Edit from './components/admin_dashboard/Edit';
import Noticepage from './components/admin_dashboard/Noticepage'
import Profile from './components/admin_dashboard/Profile'
import Report from './components/admin_dashboard/Report';
import ReportForm from './components/admin_dashboard/ReportForm';
import ReportSearch from './components/admin_dashboard/ReportSearch';

import Home from './components/Student_management/Home';
import AddUser from './components/Student_management/AddUser';
import EditUser from './components/Student_management/EditUser';
import ViewUser from './components/Student_management/ViewUser';

import AllStudents from './components/Enrollment/AllStudents';
import Grade from './components/Enrollment/Grade';
const AdminRouting = () => {
  return (
    <>
    <div className="container-fluid p-0 m-0">
        <div className="header p-0 m-0" style={{backgroundColor:"#645CBB"}}>
          <Navbar/>
        </div>
        <div className="body">
            <div className="row p-0 m-0" style={{height:"90vh"}}>
              <div className="col-2 p-0 m-0 "  style={{backgroundColor: "#8294c439", height:"90vh"}}>
                <div className='sidebar'>
                  <Adminsidebar />
                </div>
                
              </div>
              <div className="col-10 p-0 m-0" style={{height:"90vh"}}>
                <div className='dashboard' style={{height:"90vh", padding:"0px", margin:"0px"}}>
                <Routes>
                <Route path="/" element={<Admindashboard />} />
                <Route path="/notice" element={<Noticepage />} />
                <Route path="/create" element={<Create />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="/dashboard" element={<Admindashboard/>} />
                <Route path="/edit/notice" element={<Noticepage/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/report" element={<ReportSearch/>} >
                  <Route path="" element={<ReportForm/>}/>
                  <Route path="reportbyid/:id" element={<Report/>}/>
                </Route>
                <Route path="/course-management" element={<Coursemanagement />} >
                    <Route path="edit-course/:id" exact={true} element={<Editcourse/>} />
                    <Route path='' element={<ViewCourses/>} />
                    <Route path='add-courses' element={<AddCourses/>} />
                    <Route path="*" element={<Error/>}/>
                  </Route>
                  <Route path="/home" element={<Home/>} /> 
                  <Route path="/home/view/:id" element={<ViewUser/>} /> 
                  <Route path="/home/edituser/:id" element={<EditUser/>} /> 
                  <Route path="/all-students" element={<AllStudents />}/>
                  <Route path="/all-students/grade/:id" element={<Grade />} />
                      
              </Routes>   
              </div>      
              </div>
            </div>
        </div>  
      </div>
      </>
  )
}

export default AdminRouting