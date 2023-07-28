import React, { useEffect, useState } from "react";
import { Table, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

import {privateAxios} from "./../../services/helper"
function Grade() {
  const [course, setCourse] = useState([]);
  const {id } = useParams();

  useEffect(() => {
      privateAxios.get(`/auth/enrollmentsbyId/${id}`).then(response =>{
        //console.log(response.data);
        setCourse(response.data);
      })
  }, []);

  useEffect(() => {
    privateAxios.get(`/auth/enrollmentsbyId/${id}`).then(response =>{
      //console.log(response.data);
      setCourse(response.data);
    })
}, [course]);
  
  const handleGradeChange = (grade, enroll_id) => {
    privateAxios.put(`/auth/GradeChange/${grade}/${enroll_id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        setCourse(prevCourse => {
          const updatedCourse = prevCourse.map(data => {
            if (data.enroll_id === enroll_id) {
              return {
                ...data,
                grade: grade
              };
            }
            return data;
          });
          return updatedCourse;
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  const handleDelete = (enroll_id) => {
    privateAxios.delete(`/auth/delenroll/${enroll_id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
       
          //fetchEnrollments();
        } else {
          throw new Error('Failed to delete enrollment');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


      
        return (
          <>
            <div style={{ marginTop: '90px' ,marginLeft:'90px'}}>
            <h2 style={{ textAlign: 'center' }}>Enrolled courses & Grade</h2>
            <div style={{ overflowX: 'auto' ,marginTop: '60px'}}>
              <Table bordered style={{ minWidth: '800px' }}>
                <thead>
                  <tr>
                    <th>Enroll Id</th>
                    <th>Course Id</th>
                    <th>Course Name</th>
                    <th>Grade</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {course.map((data) => {
                    return (
                      <tr key={data.course_id}>
                        <td>{data.enroll_id}</td>
                        <td>{data.course.id}</td>
                        <td>{data.course.name}</td>
                        <td>
                          <Form.Select
                            value={data.grade}
                            onChange={(e) => handleGradeChange(e.target.value, data.enroll_id)}
                          >
                            <option value="O">Incomplete</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="F">F</option>
                          </Form.Select>
                        </td>
                        <td>
                          <BsTrash
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleDelete(data.enroll_id)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
            </div>
          </>
        );
}
export default Grade;
