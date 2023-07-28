import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import {privateAxios} from "./../../services/helper"

function Noticepage() {

    const [apiData, setApiData] = useState([])

    function getData() {
        privateAxios.get('/auth/notification')
            .then((response) => {
                setApiData(response.data);
            }).catch((err) => {
                console.log(err)
            });
    }

    // function handleDelete(id) {
    //     axios.delete(`http://localhost:8080/notification/${id}`)
    //         .then(() => {
    //             getData();
    //         }).catch((err) => {
    //             console.log(err)
    //         });
    // }

    function handleDelete(id) {
        privateAxios.delete(`/auth/notification/${id}`)
          .then(() => {
            getData();
          })
          .catch((error) => {
            console.log(error);
            alert('An error occurred.');
          });
      }
    function setDataToStorage(id,title,description){
      localStorage.setItem('id',id);
        localStorage.setItem('title',title);
        localStorage.setItem('description',description);
       
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <>
        <div className="title">
            <p className='page-name' >Send Notifications Page</p>
        </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='mb-2'>
                        <Link to='/main/create'>
                            {/* <button className='btn btn-primary'>Create New Notification</button> */}
                            <button className="form-btn" style={{ backgroundColor: '#645CBB', height: '40px', marginLeft: '30px', border: 'none',color:'white',borderRadius: '5px' }}>Create New Notification</button>
                        </Link>
                        
                    </div><br/>

                    <table className='table table-bordered table-striped' style={{ backgroundColor: '#645CBB',color:'white' }}>
                        <thead>
                            <tr>
                            {/* <th>ID</th> */}
                                <th>TITLE</th>
                                <th>DESCRIPTION</th>
                                
                                <th>EDIT</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                apiData.map((item) => {
                                    return (
                                        <>
                                            <tr>
                                            {/* <td>{item.id}</td> */}
                                                <td>{item.title}</td>
                                                <td>{item.description}</td>
                                                
                                                <td>
                                                    <Link to='/main/Edit'>
                                                        <button className='btn btn-primary' onClick={() => setDataToStorage(item.id,item.title, item.description)}>Edit</button>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <button className='btn btn-danger' onClick={() => { if (window.confirm('Are You Sure To Delete Data ??')) { handleDelete(item.id) } }}>Delete</button>
                                                </td>
                                            </tr>
                                        </>
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

export default Noticepage