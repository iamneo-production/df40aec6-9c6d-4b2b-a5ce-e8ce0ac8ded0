import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './courseDetails.css';

const CourseDetails = () => {
  let navigate = useNavigate();
  const { id} = useParams();
  const [grade, setGrade] = useState('');
  const [completionStatus, setCompletionStatus] = useState('');

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/courses/${id}`);
        const courseDetails = res.data;
        setGrade(courseDetails.grade);
        setCompletionStatus(courseDetails.completionStatus);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <div className="heading-container">
        <button className="back-button" onClick={handleGoBack}>
          Back
        </button>
        <p className="course-heading">Course details</p>
      </div>
      <div className="body-container">
        <p>Grade: {grade}</p>
        <p>Completion Status: {completionStatus}</p>
      </div>
    </>
  );
};

export default CourseDetails;
