import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './dash.css'


const Sidebar = () => {
  return (
    <div className="col-md-5 col-lg-12 sidebar-offcanvas m-0 p-0" id="sidebar" role="navigation" style={{ backgroundColor: "#8294c439", minHeight: "100%" }}>
      <ul className="nav flex-column sticky-top pt-5 p-3 ">
        <li className="nav-item mb-2 "><a className="nav-link text-secondary" href="#"><h5 style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"800"}}>DASHBOARD</h5></a></li>
        <div className="dropdown p-3">
          <button className="btn btn-secondary dropdown-toggle"  style={{ backgroundColor: "#645CBB"}} href="#" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-user" aria-hidden="true"></i> <span style={{ color: "white", fontFamily:"montserrat", fontWeight:"600" }}className="ml-3">Profile</span>
          </button>
          <ul className="dropdown-menu" >
            <li><a className="dropdown-item" href="#"><i className="fa fa-regular fa-pen"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"400" }}>Edit profile</span></a></li>
            <li><a className="dropdown-item" href="#"><i className="fa fa-solid fa-eye" aria-hidden="true"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"400" }}>View Profile</span></a></li>
            <li><a className="dropdown-item" href="#"><i className="fa fa-regular fa-power-off" aria-hidden="true"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"400" }}>Sign Out</span></a></li>
             
          </ul>
        </div>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/dashboard"><i className="fa fa-thin fa-city" aria-hidden="true"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>Dashboard</span></Link></li>
        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fa fa-solid fa-file" aria-hidden="true"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>Admission form</span></a></li>
        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fa fa-solid fa-eye" aria-hidden="true"></i> <span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>View status</span></a></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/myenrollment"><i className="fas fa-file-export font-weight-bold"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>My enrollments</span></Link></li>
        <li className="nav-item mb-2"><Link className="nav-link text-secondary" to="/courses"><i className="fa fa-thin fa-book"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>Courses</span></Link></li>
        <li className="nav-item mb-2"><a className="nav-link text-secondary" href="#"><i className="fa fa-regular fa-bell"></i><span className="ml-3" style={{ color: "#645CBB", fontFamily:"montserrat", fontWeight:"600" }}>Notifications</span></a></li>
       
      </ul>
    </div>
  );
}
export default Sidebar