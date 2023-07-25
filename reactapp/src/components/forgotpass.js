import { useState } from "react";
import { toast } from "react-toastify";
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import "./Login.css"



import { useNavigate } from "react-router-dom";
import { sendOTP, verifyOTP } from "../services/user-service";


const Forgotpass = () => {
    const navigate = useNavigate();
  

    const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",});


  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };



  // WRITE LOGIC HERE
  const handleOTP = () => {


    if (loginDetail.username.trim() == "") {
        toast.error("Please enter a valid email !!");
        return;
    }

    console.log(loginDetail.username);
    console.log("handle otp called");
    // Send OTP to email
    sendOTP(loginDetail.username)
    .then((data) => {console.log(data); toast.success("OTP Sent !!");})   
    .catch((error) => {toast.error("Something went wrong  on server !!" + error.message);});
  };



  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("OTP is required !!");
      return;
    }
    else{
        console.log("came here verify pass");
        verifyOTP(loginDetail.username,loginDetail.password)
        
        .then( (data) => { 
            
            if(data == "Incorrect password or time has expired") {
            toast.error("Incorrect password or time has expired")
     } 
     else{
        toast.success("Verified Successfully !!"); 
        navigate("/setpass");}

    }) 
       .catch((error) => {toast.error("Something went wrong  on server !!" + error.code);});
    }

};
  return (
<div style={{backgroundImage: "linear-gradient(#645CBB, white)"}}>
    <Container className="login-container" >
    <Row className="login-row">
    <Col className="login-col" sm={{ size: 6}}>
            <Card style={{ backgroundColor: '#645CBB' }}  inverse>
              <CardHeader>
              <center><h3 style={{fontFamily:"Montserrat", fontWeight:"800"}}>FORGOT PASSWORD</h3></center>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email for OTP Verification</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

                  <div className="login-text-center">
                    <Button onClick={handleOTP} color="light" outline>
                      Send OTP
                    </Button>
                  </div>

     

                  <FormGroup>
                    <Label for="password">Enter OTP</Label>
                    <Input
                      type="number"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <div className="login-text-center">
                    <Button onClick={()=>navigate("/login")} color="light" outline>
                      Back
                    </Button>&nbsp;&nbsp;
                    <Button color="light" outline>
                      Verify
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
  );
};

export default Forgotpass;