import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './course.css';

const Course = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:8080/courses');
      if (res.data.length > 0) {
        setCourses(res.data);
        setFilteredCourses(res.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleViewMore = (id) => {
    navigate(`/courseDetails/${id}`);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterCourses(event.target.value);
  };

  const filterCourses = (searchTerm) => {
    const filtered = courses.map((course) => ({
      ...course,
      highlighted:
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.id.toString().includes(searchTerm.toLowerCase()),
    }));
    setFilteredCourses(filtered);
  };

  return (
    <>
      <div className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button className="search-button" onClick={() => filterCourses(searchTerm)}>
          Search
        </button>
      </div>
      <div className="course-container">
        {filteredCourses.map((curCourse) => (
          <div className={`course-card ${curCourse.highlighted ? 'highlighted' : ''}`} key={curCourse.id}>
            <p className="course-name">{curCourse.name}</p>
            <p className="course-id">ID: {curCourse.id}</p>
            <div className="block">
              <button className="view-more" onClick={() => handleViewMore(curCourse.id)}>
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Course;
