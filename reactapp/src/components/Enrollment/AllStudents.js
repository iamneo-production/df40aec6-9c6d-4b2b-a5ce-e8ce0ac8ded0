
import axios from 'axios';
import React, { useEffect, useState } from "react";
// import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdbreact';
import { Nav } from 'react-bootstrap';

import {privateAxios} from "./../../services/helper"

function Students() {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent =async()=>{
    const result = await privateAxios.get("/auth/students")
        setStudent(result.data);
  };

  return (
    <div style={{ marginTop: '50px' }}>
      <p className='page-name' style={{ textAlign: 'center' }}>
        Registered Students
      </p>
      <div style={{ overflowX: 'auto' ,marginTop: '60px'}}>
        <MDBTable bordered style={{ minWidth: '800px' }}>
          <MDBTableHead>
            <tr >
              <th style={{ width: '10%',textAlign: 'center', verticalAlign: 'middle' }} scope='col'>
                Student Id
              </th>
              <th style={{ width: '20%',textAlign: 'center', verticalAlign: 'middle' }} scope='col'>
                Name
              </th>
              <th style={{ width: '20%',textAlign: 'center', verticalAlign: 'middle' }} scope='col'>
                Email id
              </th>
              <th style={{ width: '20%',textAlign: 'center', verticalAlign: 'middle' }} scope='col'>
                Contact
              </th>
              <th style={{ width: '25%', textAlign: 'center', verticalAlign: 'middle' }} scope='col'>
                Enrollment details & Grading
              </th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {student.map((data) => {
              if(data.roles[0].name!="ROLE_ADMIN")  // uncomment if the list of admins are to be removed from the list
              return (
                <tr key={data.student_id} >
                  <td style={{ textAlign: 'center' }}>{data.id}</td>
                  <td style={{ textAlign: 'center' }}>{data.firstname} {data.lastname}</td>
                  <td style={{ textAlign: 'center' }}>{data.email}</td>
                  <td style={{ textAlign: 'center' }}>{data.phonenumber}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Nav.Link href={`/main/all-students/grade/${data.id}`}>
                      Select
                    </Nav.Link>
                  </td>
                </tr>
              );
            })}
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default Students;
