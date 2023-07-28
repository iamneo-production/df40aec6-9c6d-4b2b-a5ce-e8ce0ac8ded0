import React, { useState , useEffect} from 'react';
import './style.css';
import { privateAxios } from '../../services/helper';

function RegForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setpassword] = useState(null);

    const [phoneNumber, setphoneNumber] = useState(null);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState(null);
    
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);
  
    const [selectedFile, setSelectedFile] = useState(null);
    const [users, setUsers] = useState([])
        // get users 
        useEffect(() => {
          const dataString = localStorage.getItem('data');
          const data = JSON.parse(dataString);
          setUsers(data.user);
          console.log(users);
        }, []);
//     const [users, setUsers] = useState([])
//   useEffect(() => {
//     const dataString = localStorage.getItem('data');
//     const data = JSON.parse(dataString);
//     setUsers(data.user);
//     console.log(users);
//   }, []);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setpassword(value);
        }
        if(id === "mobile"){
            setphoneNumber(value);
        }

        if(id === "address"){
            setAddress(value);
        }
        if(id === "city"){
            setCity(value);
        }
        if(id === "state"){
            setState(value);
        }
        if(id === "country"){
            setCountry(value);
        }
        
    }
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
      };
  
        function handleDobChange(event) {
          setDob(event.target.value);
        }
        function handleGenderChange(event) {
          setGender(event.target.value);
        }
    
    const handleSubmit  = (e) => { 
        
        //console.log(firstName,lastName,email,mobile,gender,dob,address,city,state,country);
    
       
      if (firstName === null) {
          alert('Please enter your first name');
          return;
        }
        if(lastName===null){
            alert('Please enter your last name');
            return;
        }
        if(email===null){
            alert('Please enter your email');
            return;
        }
        if(phoneNumber===null){
            alert('Please enter your mobile number');
            return;
        }
   
        if (gender === null) {
            window.alert('Please select gender.');
            return;
          }

          if (dob === null) {
            window.alert('Please select date of birth');
            return;
          }
        if(address==null){
            alert('Please enter your address');
            return;
        }
        if(city==null){
            alert('Please enter your city');
            return;
        }       
         if(state==null){
            alert('Please enter your state');
            return;
        }       
         if(country==null){
            alert('Please enter your country');
            return;
        }
      
     
        const student = {
          firstName,
          lastName,
          email,
          password,
          phoneNumber,
          gender,
          dob,
          address,
          city,
          state,
          country,
        };
        
        const studentId = users.id;
        const admissionData = { student_id: studentId };
        privateAxios
          .post(`/auth/admissions/${studentId}`, admissionData)
          .then((res) => {
            console.log('Admission created:', res.data);
            // Reset the form
            setSelectedFile(null);
            

            // Reset the file input value
            const fileInput1 = document.getElementById('myfile');
            const fileInput2 = document.getElementById('myfile1');
            const fileInput3 = document.getElementById('myfile2');
            const fileInput4 = document.getElementById('myfile3');
            const fileInput5 = document.getElementById('myfile4');
            if (fileInput1 || fileInput2 || fileInput3 || fileInput4 || fileInput5) {
              fileInput1.value = ''; 
              fileInput2.value = ''; 
              fileInput3.value = ''; 
              fileInput4.value = ''; 
              fileInput5.value = ''; 

            }
            setFirstName('');
            setLastName('');
            setEmail('');
            setpassword('');
            setphoneNumber('');
            setGender('');
            setDob('');
            setAddress('');
            setCity('');
            setState('');
            setCountry('');
        
          })
      
      .catch((error) => {
        console.error('Error:', error.response);
      });


      window.alert("Your Application is Submitted");
    };

      const handleFileUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', selectedFile);
    
        privateAxios.post('/auth/upload', formData)
          .then((response) => {
            console.log(response.data);
            
            window.alert("File Uploaded Successfully");
            
            // Display success message or perform additional actions
            // fetchFileList(); // Refresh the file list after uploading
          })
          .catch((error) => {
            console.error(error);
            // Display error message or perform error handling
          });
      };
    
      
    return(
        <div className="form">
            <div className="form-body">

            <div className="start">
                <b>Fill the following details</b>
            </div>

                <div className="firstname">
                    <label className="form__label" htmlFor="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" name="firstname" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" htmlFor="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" htmlFor="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="password">
  <label className="form__label" htmlFor="password">Password</label>
  <input
    type="password" id="password"  className="form__input"value={password} onChange={(e) => handleInputChange(e)} placeholder="Password"/>
</div>

                <div className="mobile">
                    <label className="form__label" htmlFor="mobile">Phone Number </label>
                    <input  type="mobile" id="mobile" maxLength={10} className="form__input" value={phoneNumber} onChange = {(e) => handleInputChange(e)} placeholder="Mobile"/>
                </div>
                <div className="gender">
                <label className="form__label">Gender:</label>
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
            </div>

            <div className="dob">
                    <label className="form__label" htmlFor="date">Date of Birth </label>
                    <input type="date"  value={dob} onChange={handleDobChange}/>

                </div>

            <div className="address">
                    <label className="form__label" htmlFor="address">Address </label>
                    <input  type="mobile" id="address" className="form__input" value={address} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
  
                <div className="city">
                    <label className="form__label" htmlFor="city">City </label>
                    <input  type="city" id="city" className="form__input" value={city} onChange = {(e) => handleInputChange(e)} placeholder="City"/>
                </div>
                <div className="state">
                    <label className="form__label" htmlFor="state">State </label>
                    <input  type="state" id="state" className="form__input" value={state} onChange = {(e) => handleInputChange(e)} placeholder="State"/>
                </div>
                <div className="country">
                    <label className="form__label" htmlFor="country">Country </label>
                    <input  type="country" id="country" className="form__input" value={country} onChange = {(e) => handleInputChange(e)} placeholder="Country"/>
                </div> <br/>
            <div className="middle">
                <b>Upload the following documents</b>
            
</div>
            <form action="/action_page.php" 
        encType="multipart/form-data">
          
        <label htmlFor="myfile">Upload a passport size photo:</label>
        <input type="file" accept='.pdf' id="myfile" name="myfile" onChange={(e) => handleFileChange(e)}/>
        
        <button onClick={handleFileUpload}>  Upload</button>
        </form>

        <form action="/action_page.php" 
        encType="multipart/form-data">
          
          
        <label htmlFor="myfile">Upload the Aadhar card copy</label><br/>
        <input type="file" accept='.pdf' id="myfile1" name="myfile1"  onChange={(e) => handleFileChange(e)} />
        
        <button onClick={handleFileUpload}>  Upload</button>
        </form>

        <form action="/action_page.php" 
        encType="multipart/form-data">
          
        <label htmlFor="myfile">Upload 10th marksheet</label><br/>
        <input type="file" accept='.pdf' id="myfile2" name="myfile2"  onChange={(e) => handleFileChange(e)}/>
        
        <button onClick={handleFileUpload}>  Upload</button>
        </form>

        <form action="/action_page.php" 
        encType="multipart/form-data">
          
        <label htmlFor="myfile">Upload 12th or intermediate marksheet</label><br/>
        <input type="file" accept='.pdf' id="myfile3" name="myfile3" onChange={(e) => handleFileChange(e)} />
  
        <button onClick={handleFileUpload}>  Upload</button>
        </form>
        
        <form action="/action_page.php" 
        encType="multipart/form-data">
          
        <label htmlFor="myfile">Upload bonofide certificate(6th to 12th):</label><br/>
        <input type="file" accept='.pdf' id="myfile4" name="myfile4"  onChange={(e) => handleFileChange(e)} />
      
        <button onClick={handleFileUpload}>  Upload</button>
        </form>


            
<div id="result"></div>
        </div>
        <div className="footer">
           
                <button className='btn btn-primary' onClick={()=>handleSubmit()} type="submit">Submit Application</button>
               
            </div>
       </div>
       
    )       
}

export default RegForm;