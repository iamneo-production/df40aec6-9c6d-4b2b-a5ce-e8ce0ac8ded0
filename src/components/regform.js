import React, {useState,setState} from 'react';
import './style.css'


function RegForm() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [gender, setGender] = useState(null);
    const [dob, setDob] = useState(null);
    
    const [address, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [country, setCountry] = useState(null);


    const [selectedFiles, setSelectedFiles] = useState({
        photo: null,
        aadhar: null,
        memo10th: null,
        memoInter: null,
        bonafide: null
      });

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
        if(id === "mobile"){
            setMobile(value);
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

    
    const handleSubmit  = (e) => { 

        console.log(firstName,lastName,email,mobile,gender,dob,address,city,state,country);
    
       
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
        if(mobile===null){
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
      


          const { photo, aadhar, memo10th, memoInter, bonafide } = selectedFiles;
          if (!photo) {
            window.alert('Please upload the photo.');
            return;
          }
      
          if (!aadhar) {
            window.alert('Please upload the Aadhar card.');
            return;
          }
      
          if (!memo10th) {
            window.alert('Please upload the 10th memo.');
            return;
          }
          if (!memoInter) {
            window.alert('Please upload the Intermediate memo.');
            return;
          }
      
          if (!bonafide) {
            window.alert('Please upload the Bonafide certificate.');
            return;
          }
      
  /*  document.write(
             "<center><h3>Your Application is submitted<h3></center> <center><button onClick={trackappliaction} > Track Application</button></center");

        
    }*/
    document.getElementById("result").innerHTML="<center>Your Application is Submitted</center>";
}
    function handleFileChange(event, fileType) {
        const files = event.target.files;
        setSelectedFiles((prevSelectedFiles) => ({
          ...prevSelectedFiles,
          [fileType]: files[0]
        }));
      }

      function handleDobChange(event) {
        setDob(event.target.value);
      }
      function handleGenderChange(event) {
        setGender(event.target.value);
      }
    
    return(
        <div className="form">
            <div className="form-body">

            <div class="start">
                <b>Fill the following details</b>
            </div>

                <div className="firstname">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" name="firstname" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="mobile">
                    <label className="form__label" for="mobile">Phone Number </label>
                    <input  type="mobile" id="mobile" maxLength={10} className="form__input" value={mobile} onChange = {(e) => handleInputChange(e)} placeholder="Mobile"/>
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
                    <label className="form__label" for="date">Date of Birth </label>
                    <input type="date"  value={dob} onChange={handleDobChange}/>

                </div>

            <div className="address">
                    <label className="form__label" for="address">Address </label>
                    <input  type="mobile" id="address" className="form__input" value={address} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
  
                <div className="city">
                    <label className="form__label" for="city">City </label>
                    <input  type="city" id="city" className="form__input" value={city} onChange = {(e) => handleInputChange(e)} placeholder="City"/>
                </div>
                <div className="state">
                    <label className="form__label" for="state">State </label>
                    <input  type="state" id="state" className="form__input" value={state} onChange = {(e) => handleInputChange(e)} placeholder="State"/>
                </div>
                <div className="country">
                    <label className="form__label" for="country">Country </label>
                    <input  type="country" id="country" className="form__input" value={country} onChange = {(e) => handleInputChange(e)} placeholder="Country"/>
                </div> <br/>
            <div class="middle">
                <b>Upload the following documents</b>
            
</div>
            <form action="/action_page.php" 
        enctype="multipart/form-data">
          
        <label for="myfile">Upload a passport size photo:</label>
        <input type="file" accept='.pdf' id="myfile" name="myfile" onChange={(e) => handleFileChange(e, 'photo')}/>
        <br />
        </form>

        <form action="/action_page.php" 
        enctype="multipart/form-data">
          
          
        <label for="myfile">Upload the Aadhar card copy</label><br/>
        <input type="file" accept='.pdf' id="myfile1" name="myfile1"  onChange={(e) => handleFileChange(e, 'aadhar')} />
        <br />
        </form>

        <form action="/action_page.php" 
        enctype="multipart/form-data">
          
        <label for="myfile">Upload 10th marksheet</label><br/>
        <input type="file" accept='.pdf' id="myfile2" name="myfile2"  onChange={(e) => handleFileChange(e, 'memo10th')}/>
        <br />
        </form>

        <form action="/action_page.php" 
        enctype="multipart/form-data">
          
        <label for="myfile">Upload 12th or intermediate marksheet</label><br/>
        <input type="file" accept='.pdf' id="myfile3" name="myfile3" onChange={(e) => handleFileChange(e, 'memoInter')} />
        <br />
        </form>
        
        <form action="/action_page.php" 
        enctype="multipart/form-data">
          
        <label for="myfile">Upload bonofide certificate(6th to 12th):</label><br/>
        <input type="file" accept='.pdf' id="myfile4" name="myfile4"  onChange={(e) => handleFileChange(e, 'bonafide')} />
        <br />
        </form>


            <div class="footer">
           
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Submit Application</button>
               
            </div>
<div id="result"></div>
        </div>
       </div>
    )       
}




export default RegForm;