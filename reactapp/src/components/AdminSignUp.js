import { useState } from "react";
import { Link } from 'react-router-dom'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { signUpAdmin } from "../services/user-service";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import './Login.css'


const AdminSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = () => {
    const pattern = /^[a-zA-Z0-9._%+-]+@virtusa/;
    if (!pattern.test(email)) {
      setEmailError('Please enter a valid email ending with @virtusa.com');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail();
  };

  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    password: '',
    phonenumber:''
  });

  const [error, setError] = useState({
    errors: {},
    isError: false,
  });

  // handle change
  const handleChange = (event, property) => {
    //dynamic setting the values
    setData({ ...data, [property]: event.target.value });
  };

  //reseting the form
  const resetData = () => {
    setData({
      email: '',
      firstname: '',
      lastname: '',
      address: '',
      password: '',
      phonenumber:''

    });
  };

  //submit the form
  const submitForm = (event) => {


    validateEmail(email);
    if (emailError) {
      toast.error("Please enter a valid email ending with @virtusa.com.");
      return;
    }

    else {
    event.preventDefault();


    console.log(data);
    //data validate

    //call server api for sending data
    signUpAdmin(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        alert("Admin Account Created");
        navigate("/login")
        setData({
          email: '',
          firstname: '',
          address: '',
          lastname: '',
          password: '',
          phonenumber:''

        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
    }
  };

  return (
<div style={{backgroundImage: "linear-gradient(#645CBB, white)"}}>
    <Container className="login-container" >
    <Row className="login-row">
    <Col className="login-col" sm={{ size: 6}}>
          <Card  inverse style={{ backgroundColor: '#645CBB' }}>
            <CardHeader>
            <center><h3 style={{fontFamily:"Montserrat", fontWeight:"800"}}> REGISTER AS ADMIN </h3></center>
            </CardHeader>
            <CardBody>
              {/* creating form */}

              <Form onSubmit={submitForm}>
                {/* Name field */}
                <FormGroup>
                  <Label for="firstname">Enter firstname</Label>
                  <Input
                    type="text"
                    placeholder="Enter Your firstname here"
                    id="firstname"
                    onChange={(e) => handleChange(e, "firstname")}
                    value={data.firstname}
                    invalid={
                      error.errors?.response?.data?.firstname ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.firstname}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="lastname">Enter lastname</Label>
                  <Input
                    type="text"
                    placeholder="Enter Your firstname here"
                    id="lastname"
                    onChange={(e) => handleChange(e, "lastname")}
                    value={data.lastname}
                    invalid={
                      error.errors?.response?.data?.lastname ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.lastname}
                  </FormFeedback>
                </FormGroup>

                {/* email field */}
                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input
                    type="email"
                    placeholder="Enter your email here"

                    id="email"
                    // onChange={(e) => handleChange(e, "email")}
                    value={data.email}
                    invalid={
                      error.errors?.response?.data?.email ? true : false
                    }
                    onChange={(e) => {handleEmailChange(e); handleChange(e, "email");}}
                    required

                  />
                  <small className="text-danger">{emailError}</small>


                  <FormFeedback>
                    {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>

                {/* password field */}
                <FormGroup>
                  <Label for="password">Enter Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your password here"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                    invalid={
                      error.errors?.response?.data?.password ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>

                {/* about field */}
                <FormGroup>
                  <Label for="address">Enter address</Label>
                  <Input
                    type="text"
                    placeholder="Enter your address here"
                    id="address"
                    onChange={(e) => handleChange(e, "address")}
                    value={data.address}
                    invalid={
                      error.errors?.response?.data?.address ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.address}
                  </FormFeedback>
                </FormGroup>

                <FormGroup>
                <Label for="phonenumber" className="mt-0">Enter phonenumber </Label>
                  <Input
                    type="number"
                    placeholder="Enter your phone here"
                    id="phonenumber"
                    onChange={(e) => handleChange(e, "phonenumber")}
                    value={data.phonenumber}
                    invalid={
                      error.errors?.response?.data?.phonenumber ? true : false
                    }
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.phonenumber}
                  </FormFeedback>
                </FormGroup>

                <div className="login-text-center">
                  <Button outline color="light">
                    Register
                  </Button>
                  <Button
                    onClick={resetData}
                    color="secondary"
                    type="reset"
                    className="ms-2"
                  >
                    Reset
                  </Button>
                </div>
                
                <br></br>
                <div className="login-text-center"> 
                Already have an account?          
                <Link to="/login"   className="outlined-button" style={{ color: 'white', textDecoration:"none" }}>Login</Link>
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

export default AdminSignup;