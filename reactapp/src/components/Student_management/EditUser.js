import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {privateAxios} from "./../../services/helper"
export default function EditUser() {
let navigate =useNavigate()
const {id}=useParams()

const [userData, setUserData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      phonenumber: ""
    }
  );

  //const {firstname,lastname,email,address,phonenumber} = userData
  

  const onInputChange = (e) => {
    setUserData({...userData, [e.target.name]:e.target.value})
  }
  const onSubmit = async (e)=>{
    e.preventDefault();
    if(userData.firstname!=="" && userData.lastname!=="" && userData.email!=="" && userData.address!=="" && userData.phonenumber!==""){
        await privateAxios.put(`/auth/students/${id}`, userData);
    }
    navigate("/main/home");
  }


// decontruction of above object (user)
// const {firstname,lastname,email,address,phonenumber}=user

// const onInputChange = (e)=>{
//     setUser({...user,[e.target.name]:e.target.value});
// };

useEffect(()=>{
    fetchUserData();
},[]);

// const handleEdit = (index) => {
//     setEditingIndex(index);
//     setNewFirstName(userData.firstname);
//     setNewLastName(userData.lastname);
//     setEmail(userData.email);
//     setNewAddress(userData.address);
//     setNewPhoneNumber(userData.phonenumber);
//   };

//   const handleSave = async () => {
//     try {
//       const updatedUser = {
//         id: userData.id,
//         firstName: newFirstName,
//         lastName: newLastName,
//         email: newEmail,
//         address: newAddress,
//         phoneNumber: newPhoneNumber,
//       };
  
//         await privateAxios.put(`/auth/students/${id}`, updatedUser);
//         setEditingIndex(-1);
//         fetchUserData();
//       } catch (error) {
//         console.error('Error updating user data:', error);
//       }
//     };
//     const handleCancel = () => {
//         setEditingIndex(-1);
//       };
    const fetchUserData = async () => {
        try {
          // change with id here pls
          const response = await privateAxios.get(`/auth/students/${id}`);
          setUserData(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
// const onSubmit=async(e)=>{
//     e.preventDefault();
//     await privateAxios.put(`/auth/students/${id}`,user)
//     navigate("/main/home")
// };



// const loadUser=async ()=>{
//     const result = await privateAxios.get(`/auth/students/${id}`)
//     console.log(result.data)
//     setUser(result.data)
// };
console.log(userData);

return (
    <div className='container-fluid '>
        <div className='row'>
            <div className ='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='"text-center m-4'>Edit user</h2>

        <form onSubmit={(e)=>onSubmit(e)}>
          {/* <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={id} type="text" name="id" placeholder='Course ID' required/>
          </div> */}
        {/* 
        firstname
        lastname
        email
        address
        phonenumber 
        */}
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={userData.firstname} type="text" name="firstname" placeholder='firstname' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={userData.lastname} type="text" name="lastname" placeholder='lastname' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={userData.email} type="text" name="email" placeholder='email' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={userData.address} type="text" name="address" placeholder='address' required/>
          </div>
          <div className="user-box">
            <input className="form-input" onChange={(e)=>onInputChange(e)} value={userData.phonenumber} type="text" name="phonenumber" placeholder='phonenumber' required/>
          </div>
          <div className="user-box">
            <button className="form-btn" style={{ justifySelf:'flex-end' }} onClick={()=>navigate("/main/home")}>Cancel</button>
            <button className="form-btn" style={{ justifySelf:'flex-start' }}  type="submit">Update</button>
          </div>
          </form>
            </div>
        </div>
    </div>
)
}
