import React, { useState, useEffect } from 'react';
import './course-info.css';
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
  const [enroll, setEnroll] = useState([]);
  const [isEnrolled, setIsenrolled] = useState(0);

  const fetchCourses = async () => {
    const result = await privateAxios.get(`/auth/courses/1`);
    setCourse(result.data);
  };

  const enrollCourse = async () => {
    try {
      await privateAxios.post(`/auth/enroll/${users.id}/${id}`);
      navigate('/main/courses'); 
    } catch (error) {
      console.error(error);
    }
  };
  const fetchEnrolls = async () => {
    try {
      const result2 = await privateAxios.get(`/auth/enrollmentsbyId/${users.id}`);
      setEnroll(result2.data);
    } catch (error) {
      console.error(error);
    }
  };
  const findEnroll = () => {
    try{
      for (let i = 0; i < enroll.length; i++) {
        console.log(enroll[i].course.id);
        if(enroll[i].course.id==id)
          setIsenrolled(1);
      }
    }
    catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if(users.id!=undefined)
    {
      fetchEnrolls();
    }
  }, [users.id]);  

  useEffect(() => {
    if(enroll!=[])
    {
      findEnroll();
    }
  }, [enroll]);

console.log(enroll);
console.log(isEnrolled);
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
          {!isEnrolled && <button className="course-enroll-btn" onClick={enrollCourse}>
            Enroll
          </button>}
        </div>
      </div>
    </>
  );
};

export default Courseinfo;