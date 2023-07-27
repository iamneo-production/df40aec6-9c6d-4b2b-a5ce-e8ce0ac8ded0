import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./report.css"

import { useNavigate } from 'react-router-dom'


const ReportSearch = () => {
  let navigate = useNavigate();
  return (
      <>
        <div className="title">
          <p className='page-name' >Report</p>
        </div>
        <div className="coursemanagement-content">
          <Outlet/>
        </div>
      </>
  )
}

export default ReportSearch