import React, { useState, useEffect } from 'react';
import {privateAxios} from "./../../services/helper"

const UserCredentials = () => {
  const [userData, setUserData] = useState(
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      phonenumber: ""
    }
  );
  const [editingIndex, setEditingIndex] = useState(-1);
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmail,setEmail]=useState('');
  const [newPassword,setPassword]=useState('');
  const [newAddress, setNewAddress] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');

  const [users, setUsers] = useState([])
  useEffect(() => {
    const dataString = localStorage.getItem('data');
    const data = JSON.parse(dataString);
    setUsers(data.user);
    console.log(users);
  }, []);

  useEffect(() => {
    if(users.id!=undefined){
      fetchUserData();
    }  
  }, [users]);
  
  const fetchUserData = async () => {
    try {
      // change with id here pls
      const response = await privateAxios.get(`/auth/students/${users.id}`);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewFirstName(userData.firstname);
    setNewLastName(userData.lastname);
    setEmail(userData.email);
    setPassword(userData.password);
    setNewAddress(userData.address);
    setNewPhoneNumber(userData.phonenumber);
  };
  const handleSave = async () => {
  try {
    const updatedUser = {
      id: userData.id,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      password: newPassword,
      address: newAddress,
      phoneNumber: newPhoneNumber,
    };

      await privateAxios.put(`/auth/students/${users.id}`, updatedUser);
      setEditingIndex(-1);
      fetchUserData();
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancel = () => {
    setEditingIndex(-1);
  };

  return (
    <div className='text-center' style={{"display" : "flex", "height": "90vh", "flexDirection": "column", "alignItems": "center", "justifyContent": "center"}}>
       <p style={{ fontWeight: 'bolder' ,color:'#645CBB',fontSize:'30px' }}>USER PROFILE</p>
        <div key={userData.id}>
          {editingIndex === 1 ? (
            <>
	          <div>
            <label style={{ fontWeight: 'bold' ,color:'#645CBB',fontSize:'20px' }}>FirstName:</label>
              <input
                type="text"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
		        </div>
	          <div>
            <label style={{ fontWeight: 'bold' ,color:'#645CBB',fontSize:'20px' }}>LastName:</label>
              <input
                type="text"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
		        </div>
            <div>
            <label style={{ fontWeight: 'bold' ,color:'#645CBB',fontSize:'20px' }}>Email:</label>
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setEmail(e.target.value)}
              />
		        </div>
           {/* <div>
            <label style={{ fontWeight: 'bold' ,color:'#645CBB',fontSize:'20px' }}>Password:</label>
              <input
                type="text"
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
              />
		        </div> */}
           
           <div>
            <label style={{ fontWeight: 'bold' ,color:'#645CBB',fontSize:'20px' }}>Address:</label>
              <input
                type="text"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
              />
		      </div>
           <div>
            <label style={{ fontWeight: 'bold' ,color:'#645CBB',fontSize:'20px' }}>PhoneNumber:</label>
              <input
                type="text"
                value={newPhoneNumber}
                onChange={(e) => setNewPhoneNumber(e.target.value)}
              />
		      </div>
              <button onClick={() => handleSave(1)} style={{ backgroundColor: '#645CBB',height: '40px',border: 'none',color:'white',borderRadius: '5px',marginRight:'20px',marginTop:'20px'}}>Save</button>
              <button onClick={handleCancel} style={{ backgroundColor: '#645CBB',height: '40px',border: 'none',color:'white',borderRadius: '5px'}}>Cancel</button>
            </>
          ) : (
            <>
              <p className='course-name'>Name: {userData.firstname} {userData.lastname}</p>
              <p className='course-name'>Email: {userData.email}</p>
              {/* <p className='course-name'>Password: {userData.password}</p> */}
              <p className='course-name'>Address: {userData.address}</p>
              <p className='course-name'>PhoneNumber: {userData.phonenumber}</p>
              <button className="form-btn" onClick={() => handleEdit(1)} >Edit</button>
            </>
          )}
        </div>
      
    </div>
  );
};

export default UserCredentials;
         
         
         
         
         