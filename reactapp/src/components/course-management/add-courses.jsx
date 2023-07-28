import React, { useState } from 'react'
import './add-courses.css'
import { useNavigate } from 'react-router-dom'

import {privateAxios} from "./../../services/helper"
export default function AddCourses() {
  let navigate = useNavigate();

  const [course, setCourse] = useState({
    //id:0,
    name:"",
    description:"",
    prerequisites:"",
    credits:""
  })

  const {id,name,description,prerequisites,credits} = course
  
  const onInputChange = (e) => {
    setCourse({...course, [e.target.name]:e.target.value})
  }

  const onSubmit = async (e)=>{
    e.preventDefault();
    try
    {
      //   if(id!==0 && name!=="" && description!=="" && prerequisites!=="" && credits!==0){
      //     await privateAxios.post("/auth/courses", course);
      // }
      if (name !== '' && description !== '' && prerequisites !== '' && credits !== '') {
        await privateAxios.post('/auth/courses', course, {
          headers: {
            'Content-Type': 'application/json', // Set the correct Content-Type header
          },
        });
      }
    }
    catch(e){
      console.log(e);
    }
    finally{
      navigate("/main/course-management");
    }
    
  }
  const back = () =>{
    navigate("/main/course-management");
  }
  
  return (
    <>
    <div className="sub-container2">
      <div className="course-form-card">
          <p className='sub-heading'>Course Details</p>
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
          <button className="form-btn"  type="submit">Submit</button>
          </div>
          </form>
      </div>
    </div>
     
    </>
  )
}
