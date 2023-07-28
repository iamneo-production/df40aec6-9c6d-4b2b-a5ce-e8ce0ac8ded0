import React, { useEffect, useState } from 'react'
import {privateAxios} from "./../../services/helper"
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users,setUsers]=useState([])
    const{id}=useParams()


    useEffect(()=>{
        loadUsers();
    },[]);


    // get data from the MYSQL 
    const loadUsers=async()=>{
        const result = await privateAxios.get("/auth/students")
        setUsers(result.data)
        console.log("---",result.data[0].roles[0].name);
    };
    const deleteUser=async(id)=>{
        await privateAxios.delete(`/auth/students/${id}`);
        loadUsers()
    };


  return (
    <div className=''>
        <div className='py-4 '></div>
        <div style={{ overflowX: 'auto' }}>
        <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">INDEX</th>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">CONTACT</th>
                <th scope='col'>ROLE</th>
                <th scope='col'>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        //if(data.roles[0].name!="ROLE_ADMIN")  // uncomment if the list of admins are to be removed from the list
                        return (
                        <tr>
                        <th scope="row" key={index}>{index+1}</th>
                        <td>{user.id}</td>
                        <td>{user.firstname} {user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.address}</td>
                        <td>{user.phonenumber}</td>
                        <td>{(user.roles[0].name=="ROLE_ADMIN"?"ADMIN":"STUDENT")}</td>

                        
                        <td>
                            <div className='d-flex'>
                            <Link className='btn btn-primary mx-2 ' to={`view/${user.id}`}>VIEW</Link>
                            <Link className='btn btn-outline-primary mx-2' to={`edituser/${user.id}`}>EDIT</Link>
                            <button className='btn btn-danger mx-2 ' onClick={()=>deleteUser(user.id)}>DELETE</button>                                          
                            </div>
                        </td>
                        
                        </tr>
                            )})
                        }
            </tbody>
        </table>
        </div>
        


                 



    </div>
  )
}
