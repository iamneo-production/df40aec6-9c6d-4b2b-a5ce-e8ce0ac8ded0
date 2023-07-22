import React, { useState, useEffect } from 'react';
import './course-info.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { privateAxios } from '../../services/helper';

const Courseinfo = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const studentId = 1; // Sample student ID 1 
  
  const [users, setUsers] = useState([])
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
    console.log(users);
  }, []);
  const [course, setCourse] = useState({
    id: '',
    name: '',
    description: '',
    prerequisites: '',
    credits: '',
  });

  const fetchCourses = async () => {
    const result = await privateAxios.get(`http://localhost:8080/api/v1/auth/courses/${id}`);
    setCourse(result.data);
  };

  const enrollCourse = async () => {
    try {
      await privateAxios.post(`http://localhost:8080/api/v1/auth/enroll/${users.id}/${id}`);
      
      navigate('/main/courses'); 
    } catch (error) {
      
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <div className="heading-container">
        <button className="course-back-btn" onClick={() => navigate('/main/courses')}>
          Back
        </button>
        <p className="course-heading">{course.name}</p>
      </div>
      <div className="body-container">
        <div className="course-container1">
          <p className="course-details-heading">Course Description:</p>
          <p className="course-details-body">{course.description}</p>
          <div className="course-container2">
            <div className="course-container3">
              <p className="course-details-heading">Prerequisites:</p>
              <p className="course-details-body">{course.prerequisites}</p>
            </div>
            <div className="course-container3">
              <p className="course-details-heading">Credits:</p>
              <p className="course-details-body">{course.credits}</p>
            </div>
          </div>
        </div>
        <div className="container4">
          <button className="course-enroll-btn" onClick={enrollCourse}>
            Enroll
          </button>
        </div>
      </div>
    </>
  );
};

export default Courseinfo;