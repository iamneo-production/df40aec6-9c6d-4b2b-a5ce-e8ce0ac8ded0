import React from 'react';
import { Link } from 'react-router-dom';
import './admin_dash.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Adminsidebar = () => {
  return (
    <div className="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation">
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3">
        <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><h5 style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"800"}}>DASHBOARD</h5></a></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/profile"><i className="fa fa-user" aria-hidden="true"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>Profile</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/dashboard"><i className="fa fa-thin fa-home" aria-hidden="true"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600", fontSize:"medium" }}>Dashboard</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/home"><i className="fa fa-solid fa-file" aria-hidden="true"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600", fontSize:"medium" }}>User Management</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/course-management"><i className="fa fa-solid fa-file" aria-hidden="true"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600", fontSize:"medium" }}>Course Management</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/all-students"><i className="fa fa-solid fa-file" aria-hidden="true"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600", fontSize:"medium" }}>Enroll Management</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/notice"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600", fontSize:"medium" }}>Send Notifications</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/main/report"><i className="fa fa-thin fa-book"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600", fontSize:"medium" }}>Report</span></Link></li>
      </ul>
    </div>
  );
};

export default Adminsidebar;
