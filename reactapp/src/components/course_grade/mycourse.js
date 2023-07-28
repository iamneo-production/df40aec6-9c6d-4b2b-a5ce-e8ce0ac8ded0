import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './mycourse.css';
import {privateAxios} from "./../../services/helper"
const MyCourse = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [student_id, setStudent_id] = useState('');  
  const [users, setUsers] = useState([])
  const fetchCourses = async () => {
    try {
      const res = await privateAxios.get(`/auth/enrollmentsbyId/${users.id}`);
      console.log(res);
        
      if (res.data.length > 0) {
        const enrollmentData = res.data;
        const mappedCourses = enrollmentData.map((Enrollment) => ({
          id: Enrollment.course.id,
          name: Enrollment.course.name,
        }));
        setCourses(mappedCourses);
        setFilteredCourses(mappedCourses);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // useEffect(() => {    
  //   setStudent_id(1);  // studentID is the id retrieved from the login page, need to update it.
  // }, []); 

  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
    console.log(users);    
  }, []);

  useEffect(() => {  
    if(users.id!=undefined)  {
      fetchCourses();
    }
      // fetch enrolls
  }, [users.id]); 
  
  const handleViewMore = (id) => {
    navigate(`/main/myenrollment/courseDetails/${id}`, { state: { courseId: id, student_id: student_id } });
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterCourses(event.target.value);
  };

  const filterCourses = (searchTerm) => {
    const filtered = courses.filter((course) => {
      const courseIdString = course.id.toString();
      return (
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        courseIdString.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredCourses(filtered);
  };

  return (
    <>
      {/* <div className="form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div> */}

      <div className="search">
        <form className='search-form'>
          <input
            type="text"
            className="search-bar"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
       </div>

      <div className="my-course-container">
        {filteredCourses.map((curCourse) => (
          <div className="my-course-card-container" key={curCourse.id}>
            <div className="my-course-card">
              <h5 className="my-course-name">{curCourse.name}</h5>
              <p className="my-course-details">Course ID: {curCourse.id}</p>
            
              <button
                className="view-more"
                onClick={() => handleViewMore(curCourse.id)}
              >
                View more
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyCourse;