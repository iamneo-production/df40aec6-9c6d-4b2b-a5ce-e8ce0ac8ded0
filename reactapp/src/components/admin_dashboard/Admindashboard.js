import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { privateAxios } from '../../services/helper';
const Admindashboard = () => {
    const [users, setUsers] = useState(0);
    const [courses, setCourses] = useState(0);
    const [admissions, setAdmissions] = useState(0);
    const [enrollments, setEnrollments] = useState(0);

    useEffect(() => { // fetch the counts
          privateAxios.get("/auth/students/count").then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.log('Error fetching count', error);
          });
          privateAxios.get("/auth/admissions/count").then(response => {
            setAdmissions(response.data);
          })
          .catch(error => {
            console.log('Error fetching count', error);
          });
          privateAxios.get("/auth/enrollment/count").then(response => {
            setEnrollments(response.data);
          })
          .catch(error => {
            console.log('Error fetching count', error);
          });
          privateAxios.get("/auth/courses/count").then(response => {
            setCourses(response.data);
          })
          .catch(error => {
            console.log('Error fetching count', error);
          });
      }, []);
    
    return (
    <div>
    <div class="col main pt-5 mt-3" >
        <div class="row mb-3">
        <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Users</h6>
                        <h1 class="display-4">{users}</h1>
                    </div>
                </div>
            </div>
            {/* <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h6 class="text-uppercase">Listed Courses</h6>
                        <h1 class="display-4">87</h1>
                    </div>
                </div>
            </div> */}
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                        <i class="fa fa-user-plus fa-4x" aria-hidden="true"></i>
                        </div>
                        <h6 class="text-uppercase">Total Applications</h6>
                        <h1 class="display-4">{admissions}</h1>
                    </div>
                </div>
            </div>
            {/* <div class="col-xl-3 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                        <i class="fa fa-question-circle fa-4x" aria-hidden="true"></i>
                        </div>
                        <h6 class="text-uppercase">Pending Applications</h6>
                        <h1 class="display-4">36</h1>
                    </div>
                </div>
            </div> */}
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-success" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                        <i class="fa fa-check fa-4x" aria-hidden="true"></i>
                        </div>
                        <h6 class="text-uppercase">Total Courses</h6>
                        <h1 class="display-4">{courses}</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 py-2">
                <div class="card bg-success text-white h-100">
                    <div class="card-body bg-danger" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                        <i class="fa fa-times fa-4x" aria-hidden="true"></i>
                        </div>
                        <h6 class="text-uppercase">Total Enrollments</h6>
                        <h1 class="display-4">{enrollments}</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
        {}
       
       
    </div></div>
    )
}
 
export default Admindashboard