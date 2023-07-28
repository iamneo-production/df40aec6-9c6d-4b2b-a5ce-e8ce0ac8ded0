import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { privateAxios } from '../../services/helper';
const Report = () => {

    let navigate = useNavigate();
    const {id} = useParams();
    const [userData, setUserData] = useState(
      {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        phoneNumber: ""
      }
    );
    const [enrollments, setEnrollments] = useState([{
      enroll_id: 0,
      course: {
            id: 0,
            name: "",
            description: "",
            prerequisites: "",
            credits: 0
        },
        student: {
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            phoneNumber: ""
        },
      grade:""
}]);
    const [admission, setAdmission] = useState([{
      adm_id: 0,
      status:"",
    }]);
    
    const fetchCourses = async () => {
      try {
        const res1 = await privateAxios.get(`/auth/enrollmentsbyId/${id}`);
        if (res1.data.length > 0) {
          const enrollmentData = res1.data;
          const mappedCourses = enrollmentData.map((Enrollment) => ({
            eid: Enrollment.enroll_id,
            
            sid: Enrollment.student.id,
            firstName: Enrollment.student.firstName,
            lastName: Enrollment.student.lastName,
            email: Enrollment.student.email,
            password: Enrollment.student.password,
            address: Enrollment.student.address,
            phoneNumber: Enrollment.student.phoneNumber,
            id: Enrollment.course.id,
            name: Enrollment.course.name,
            grade: Enrollment.grade,
          }));
          setEnrollments(mappedCourses);
        }

      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    try {
      const res2= await privateAxios.get(`/auth/admissions/student/${id}`);
      const admissionData = res2.data;
        console.log(admissionData);
        setAdmission({
          adm_id:admissionData[0].adm_id,
          status:admissionData[0].status.substr(11, 8),
        })
      }
     catch (error) {
      console.error('Error fetching courses:', error);
    }

      try {
        const response = await privateAxios.get(`/auth/students/${id}`);
        setUserData(response.data);
        
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
     
      
    };
    useEffect(() => {
      fetchCourses();
    }, []);

  return (
    <>
    
{/* Student Details */}
    <button className="report-form-btn" style={{ justifySelf:'flex-end', width:'10%', }} onClick={()=>navigate("/main/report")}>Back</button>
    <br/>
    <p className='page-name' >Student Details</p><br/>
    <div className="report-list">
    <table className='content-table'>
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Contact</th>
        </tr>
      </thead>
      <tbody>
          <tr key={userData.id}>
            <td>{userData.id}</td>
            <td>{userData.firstname} {userData.lastname}</td>
            <td>{userData.email}</td>
            <td>{userData.address}</td> 
            <td>{userData.phonenumber}</td> 
        </tr>
      </tbody>
      </table>
    </div>
    <br/>
{/* Enrollment Details */}
    <p className='page-name' >Enrollment Details</p><br/>
    <div className="report-list">
    <table className='content-table'>
      <thead>
        <tr>
          <th>Enrollment ID</th>
          <th>Course ID</th>
          <th>Course Name</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
      {
        enrollments && enrollments.map((curCourse) => (
          <tr key={curCourse.id}>
          <td>{curCourse.eid}</td>
          <td>{curCourse.id}</td>
          <td>{curCourse.name}</td>
          <td>{curCourse.grade}</td> 
        </tr>
        ))}
      </tbody>
      </table>
    </div>
<br/>
{/* Admission Details */}
<p className='page-name' >Admission Details</p><br/>
    <div className="report-list">
    <table className='content-table'>
      <thead>
        <tr>
          <th>Admission ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
          <tr key={admission.adm_id}>
            <td>{admission.adm_id}</td>
            <td>{admission.status}</td>
        </tr>
      </tbody>
      </table>
    </div>
    <br/>
    </>
  )
}

export default Report