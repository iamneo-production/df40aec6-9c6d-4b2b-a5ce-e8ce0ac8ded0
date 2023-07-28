import React, { useEffect, useState } from 'react'
import './course.css'
import { useParams, useNavigate } from 'react-router-dom';
import { privateAxios } from '../../services/helper';

const Course = () => {
  let navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  
  const fetchCourses = async () => {
    try {
      const res = await privateAxios.get("/auth/courses");
      if (res.data.length > 0) {
        setCourses(res.data);
      }
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(()=>{
    fetchCourses();
  }, [])

  const [query, setQuery] = useState("");

console.log(courses);
   return (
   <>

      <div className="search">
        <form className='search-form'>
          <input className='search-bar'  onChange = {(e)=>setQuery(e.target.value)} type="text" placeholder='Search courses' />
          {/* <button className="btn" type="submit">Search</button> */}
        </form>
       </div>
    <div className="course-container">
    {
      courses.filter(courses=>courses.name.toLowerCase().includes(query.toLowerCase())).map((curCourse) => {
        return (
          <div className="course-card-container" key={curCourse.id}>
          <div className="course-card">
            <p className='course-name'>{curCourse.name}</p>
            <p className='course-details' id='short-txt'>
            <span style={{fontWeight:'bold'}}>Description: </span>
              {curCourse.description}
            </p>
            <div className="block">
            <p className='course-details' id='short-txt'><span style={{fontWeight:'bold'}}>Prerequisites: </span>{curCourse.prerequisites}</p>
            </div>
            <div className="block">
            <p className='course-details'><span style={{fontWeight:'bold'}}>Credits: </span>{curCourse.credits}</p>
            </div>
            <div className="block" style={{ marginTop: "5px"}}>
              <button className='view-more' onClick={() => navigate(`/main/courses/course-info/${curCourse.id}`)}>View More</button>
            </div>
            
          </div>
        </div>
        )
      })
    }
    </div>
   </>

    
  )
}

export default Course