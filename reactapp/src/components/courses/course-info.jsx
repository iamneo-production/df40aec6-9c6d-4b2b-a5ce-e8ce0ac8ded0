import React, {useState, useEffect} from 'react'
import './course-info.css'
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom'

const Courseinfo = () => {
    
  let navigate = useNavigate();
  const {id} = useParams();
  const [course, setCourse] = useState({
    id:"",
    name:"",
    description:"",
    prerequisites:"",
    credits:""
  })
  const fetchCourses = async () =>{
    const result = await axios.get(`http://localhost:8080/courses/${id}`)
    setCourse(result.data)
  }
  useEffect(()=>{
    fetchCourses();
  }, [])
  return (
    <>
    
    <div className="heading-container">
    <button className='course-back-btn' onClick={()=>navigate("/")}>Back</button>
      <p className='course-heading'>{course.name}</p>
    </div>
    <div className="body-container">
      <div className="container1">
        <p className='course-details-heading'>Course Description:</p>
        <p className='course-details-body'>{course.description}</p>
        <div className="container2">
        <div className="container3">
          <p className='course-details-heading'>Prerequisites:</p>
          <p className='course-details-body'>{course.prerequisites}</p>
        </div>
        <div className="container3">
          <p className='course-details-heading'>Credits:</p>
          <p className='course-details-body'>{course.credits}</p>
        </div>
        </div>
      </div>
      <div className="container4">
        <button className='course-enroll-btn' onClick={()=>navigate("/")}>Enroll</button>
      </div>
      
    </div>
    </>
  )
}

export default Courseinfo