import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AcceptReject from './AcceptReject';
import FileList from './FileList';
import { privateAxios } from '../../services/helper';

export default function ViewUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    phoneNumber: '',
    roles:[],
  });
  const [role, setRole] = useState();
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    if(user.id!='')
    {
      setRole(user.roles[0].name)
      console.log(user.roles[0].name);
    }
  }, [user]);

  const loadUser = async () => {
    const result = await privateAxios.get(`/auth/students/${id}`);
    setUser(result.data);
  };

  return (
    <>
      <div className='container-fluid' style={{height:"90vh"}}>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>User Details</h2>
            <div className='card'>
              <div className='card-header'>
                <b>Details of user id : {user.id}</b>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>Name : </b>
                    {user.firstname} {user.lastname}
                  </li>
                  <li className='list-group-item'>
                    <b>Email : </b>
                    {user.email}
                  </li>
                  <li className='list-group-item'>
                    <b>Address : </b>
                    {user.address}
                  </li>
                  <li className='list-group-item'>
                    <b>Mobile Number : </b>
                    {user.phonenumber}
                  </li>
                </ul>
              </div>
              {/* <Link className='btn btn-outline-primary mx-2 my-2' to={`/edituser/${user.id}`}>
                EDIT
              </Link>
              <button className='btn btn-danger mx-2 my-2' onClick={() => deleteUser(user.id)}>
                DELETE
              </button> */}
            </div>
          </div>
        </div>
        {role!="ROLE_ADMIN" && 
              <>
                <div className='row'>
                  <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                  <h2 className='text-center m-4'>User status</h2>
                  <div className='card'>
                  <div className='card-header'>
                    <b>Admission status of student id : {user.id}</b>
                    <AcceptReject  id={id} />
                  </div>
                  </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Files</h2>
                    <b>Files of student id : {user.id}</b>
                    <div className='card'>
                    <div className='card-header'>
                      <FileList id={id}/>
                    </div>
                    </div>
                  </div>
                </div>
                </>}
      </div>
    </>
  );
}
