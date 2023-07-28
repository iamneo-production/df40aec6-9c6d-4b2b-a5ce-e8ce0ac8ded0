import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import {privateAxios} from "./../../services/helper"

export default function Editcourse() {
  let navigate = useNavigate();
  const {id} = useParams();
  const [course, setCourse] = useState({
    id:"",
    name:"",
    description:"",
    prerequisites:"",
    credits:""
  })

  const {cid,name,description,prerequisites,credits} = course
  
  useEffect(()=>{
    fetchCourses();
  }, []);

  const onInputChange = (e) => {
    setCourse({...course, [e.target.name]:e.target.value})
  }

  const onSubmit = async (e)=>{
    e.preventDefault();
    if(id!==0 && name!=="" && description!=="" && prerequisites!=="" && credits!==0){
      await privateAxios.put(`/auth/courses/${id}`, course);
    }
      
    
    navigate("/main/course-management");
  }

  const fetchCourses = async () =>{
    const result = await privateAxios.get(`/auth/courses/${id}`)
    setCourse(result.data)
  }
  const back = () =>{
    navigate("/main/course-management");
  }
  
  return (
    <>
    <div className="sub-container2">
      <div className="course-form-card">
          <p className='sub-heading'>Edit Course</p>
        <form onSubmit={(e)=>onSubmit(e)}>
          {/* <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={id} type="text" name="id" placeholder='Course ID' required/>
          </div> */}
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={name} type="text" name="name" placeholder='Name' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={description} type="text" name="description" placeholder='Description' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={prerequisites} type="text" name="prerequisites" placeholder='Prerequisites' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={credits} type="text" name="credits" placeholder='Credits' required/>
          </div>
          <div className="user-box">
            <button className="form-btn" style={{ justifySelf:'flex-end' }} onClick={()=>back()}>Cancel</button>
            <button className="form-btn" style={{ justifySelf:'flex-start' }}  type="submit">Update</button>
          </div>
          </form>
      </div>
    </div>
     
    </>
  )
}
