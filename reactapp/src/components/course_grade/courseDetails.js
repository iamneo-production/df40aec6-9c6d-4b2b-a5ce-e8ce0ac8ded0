import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './courseDetails.css';
import { privateAxios } from '../../services/helper';

const CourseDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { courseId, student_id } = location.state || {};
  const [grade, setGrade] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([])
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
    console.log(users);    
  }, []);
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await privateAxios.get(`/auth/enrollmentsbyId/${users.id}`);
        const enrollments = res.data;
        const enrollment = enrollments.find((enrollment) => enrollment.course.id === courseId);
        if (enrollment) {
          setGrade(enrollment.grade);
          setName(enrollment.course.name)
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseDetails();
  }, [courseId, users.id]);

  const handleGoBack = () => {
    navigate('/main/myenrollment');
  };

  return (
    <>
      <div className="heading-container">
        <button className="course-back-btn" onClick={handleGoBack}>
          Back
        </button>
        <p className="course-heading">Course Name: {name}</p>
      </div>
      <div className="body-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p>Grade: {grade}</p>
          </>
        )}
      </div>
    </>
  );
};

export default CourseDetails;