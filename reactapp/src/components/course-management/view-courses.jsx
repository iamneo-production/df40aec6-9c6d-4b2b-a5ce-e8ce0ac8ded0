import React, { useEffect, useState } from 'react'
import './view-courses.css'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import editlogo  from '../../assets/edit.png'
import deletelogo  from '../../assets/delete.png'


export default function ViewCourses() {

  let navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const {id} = useParams();

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:8080/courses");
      if (res.data.length > 0) {
        setCourses(res.data);
      }
    } catch (e) {
      console.error(e)
    }
  }

  const deleteCourse = async (id) => {
    let confirmation = window.confirm("Are you sure? This will delete the course permanently!");
    if(confirmation){
      await axios.delete(`http://localhost:8080/courses/${id}`);
      fetchCourses();
    }

  }

  useEffect(()=>{
    fetchCourses();
  }, [])
  

  const [query, setQuery] = useState("");

  return (
    <>
    <div className="sub-container">
    <div className="search">
        <form className='search-form'>
          <input className='search-bar' onChange = {(e)=>setQuery(e.target.value)} type="text" placeholder='Search a course..' />
          <button className="butn" type="submit">Search</button>
        </form>
       </div>
    <div className="list">
    <table className='content-table'>
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Prerequisites</th>
          <th>Credits</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          //courses.filter(courses=>courses.name.toLowerCase().includes(query.toLowerCase()))
          courses.filter(courses=>courses.name.toLowerCase().includes(query.toLowerCase())).map((curCourse) => {
            //const {id, name, description, prerequisites, credits} = curCourse;
            return (
                <tr key={curCourse.id}>
                  <td>{curCourse.id}</td>
                  <td>{curCourse.name}</td>
                  <td>{curCourse.description}</td>
                  <td>{curCourse.prerequisites}</td>
                  <td>{curCourse.credits}</td>
                  <td className='action'>                  
                    <button onClick={() => navigate(`/course-management/edit-course/${curCourse.id}`)}>
                      <img src={editlogo} alt="" width="10"/>
                    </button>
                    <button onClick={()=>deleteCourse(curCourse.id)}>
                      <img src={deletelogo} alt="" width="10"/>
                    </button>
                  </td>
                </tr>
            )
          })
        }
      </tbody>
    </table>
    </div>
    </div>
    </>
  )
}
