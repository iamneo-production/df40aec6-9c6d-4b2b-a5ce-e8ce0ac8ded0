import React from 'react'

export const Error = () => {
  return (
    <div style={{
      height:"90vh", 
      width:"100%", 
      display:"flex", 
      alignItems:"center", 
      justifyContent:"center"
    }}>
      <p className='error-name'>404 Not Found</p>
    </div>
  )
}
