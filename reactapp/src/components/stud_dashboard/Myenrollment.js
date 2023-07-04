import React from 'react';
import './dash.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Myenrollment = () => {
  const myenrollment = [
    { studentId: 1, studentName: 'John Doe', courseName: 'ReactJs', grade: 'A' },
    { studentId: 2, studentName: 'John Doe', courseName: 'Springboot', grade: 'B' },
    { studentId: 3, studentName: 'John Doe', courseName: 'Microbiology', grade: 'C' },
    // Add more student data as needed
  ];

  return (
    <div className='container'>
      <div>
        <h2>My Enrollment</h2>
        <br />
        <table className='table table-bordered'>
          <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Course Name</th>
            <th>Grade</th>
          </tr>
          </thead>
          <tbody>
            {myenrollment.map((student) => (
              <tr key={student.studentId}>
                <td>{student.studentId}</td>
                <td>{student.studentName}</td>
                <td>{student.courseName}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  );
};

export default Myenrollment;