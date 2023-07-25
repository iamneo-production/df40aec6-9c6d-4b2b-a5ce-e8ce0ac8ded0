import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const ReportForm = () => {

    let navigate = useNavigate();

    const [id, setId] = useState('');
    const back = () =>{
        navigate("/main/dashboard");
      }
      const onInputChange = (e) => {
        setId(e.target.value)
      }
  return (
    <>
    <div className="sub-container2">
      <div className="form-card">
          <p className='sub-heading'>Generate Report</p>
        <form onSubmit={ ()=> navigate(`/main/report/reportbyid/${id}`)}>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={id} type="text" name="id" placeholder='Student ID' required/>
          </div>
          <div className="user-box">
            <button className="report-form-btn" style={{ justifySelf:'flex-end' }} onClick={()=>back()}>Back</button>
            <button className="report-form-btn" style={{ justifySelf:'flex-start' }}  type="submit">Search</button>
          </div>
          </form>
      </div>
    </div>
    </>
  )
}

export default ReportForm