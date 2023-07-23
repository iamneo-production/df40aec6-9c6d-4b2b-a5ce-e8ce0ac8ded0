
import { useState } from "react";
import { Link } from 'react-router-dom'
import {Routes, Route, useNavigate} from 'react-router-dom';
import { signUp } from "../services/user-service";
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

const Signup = () => {
  
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    firstname: '',
    lastname:'',
    phonenumber: '',
    address: '',
    password: '',

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
      lastname:'',
      phonenumber: '',
      password: '',
      address:''

    });
  };

  //submit the form
  const submitForm = (event) => {
    event.preventDefault();


    console.log(data);
    //data validate

    //call server api for sending data
    signUp(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        alert("Account Created");
        navigate("/login");
        setData({
          email: '',
          firstname: '',
          lastname:'',
          phonenumber: '',
          address: '',
          password: '',

        });
      })
      .catch((error) => {
        console.log(error);
        console.log("Error log");
        alert("Sign Up failed");
        //handle errors in proper way
        setError({
          errors: error,
          isError: true,
        });
      });
  };

  return (
    <div style={{backgroundImage: "linear-gradient(#645CBB, white)"}}>
    <Container className="login-container" >
      <Row className="login-row">
        {/* { JSON.stringify(data) } */}

        <Col className="login-col" sm={{ size: 6}}>
          <Card  inverse style={{ backgroundColor: '#645CBB' }}>
            <CardHeader>
              <center><h3 style={{fontFamily:"Montserrat", fontWeight:"800"}}> REGISTER AS STUDENT </h3></center>
            </CardHeader>

            <CardBody>
              {/* creating form */}

              <Form onSubmit={submitForm}>
                {/* Name field */}
                <FormGroup >
                  <Label for="name" className="mt-0">Enter First Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Your name here"
                    id="firstname"
                    onChange={(e) => handleChange(e, "firstname")}
                    value={data.firstname}
                    invalid={
                      error.errors?.response?.data?.firstname ? true : false
                    }
                    required = "true"
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.firstname}
                  </FormFeedback>
                </FormGroup>

                <FormGroup >
                  <Label for="name" className="mt-0">Enter Last Name</Label>
                  <Input
                    type="text"
                    placeholder="Enter Your name here"
                    id="lastname"
                    onChange={(e) => handleChange(e, "lastname")}
                    value={data.lastname}
                    invalid={
                      error.errors?.response?.data?.lastname ? true : false
                    }
                    required = "true"
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.lastname}
                  </FormFeedback>
                </FormGroup>

                {/* email field */}
                <FormGroup>
                  <Label for="email" className="mt-0">Enter Email</Label>
                  <Input
                    
                    type="email"
                    placeholder="Enter your email here"
                    id="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={data.email}
                    invalid={
                      error.errors?.response?.data?.email ? true : false
                    }
                    required = "true"
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.email}
                  </FormFeedback>
                </FormGroup>

                {/* password field */}
                <FormGroup>
                  <Label for="password" className="mt-0">Enter Password</Label>
                  <Input
                    type="password"
                    placeholder="Enter your password here"
                    id="password"
                    onChange={(e) => handleChange(e, "password")}
                    value={data.password}
                    invalid={
                      error.errors?.response?.data?.password ? true : false
                    }
                    required = "true"
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.password}
                  </FormFeedback>
                </FormGroup>

                {/* about field */}
                <FormGroup>
                  <Label for="phonenumber" className="mt-0">Enter phonenumber </Label>
                  <Input
                    type="number"
                    placeholder="Enter your phonenumber here "
                    id="phonenumber"
                    onChange={(e) => handleChange(e, "phonenumber")}
                    value={data.phonenumber}
                    invalid={
                      error.errors?.response?.data?.phonenumber ? true : false
                    }
                    required = "true"
                  />

                  <FormFeedback>
                    {error.errors?.response?.data?.phonenumber}
                  </FormFeedback>
                </FormGroup>
                <FormGroup>
                  <Label for="password" className="mt-0">Enter Address</Label>
                  <Input
                    type="text"
                    placeholder="Enter your address here"
                    id="address"
                    onChange={(e) => handleChange(e, "address")}
                    value={data.address}
                    invalid={
                      error.errors?.response?.data?.address ? true : false
                    }
                    required = "true"
                  />
                  <FormFeedback>
                    {error.errors?.response?.data?.adress}
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
                    className="ms-2 md-0"
                  >
                    Reset
                  </Button>
                </div>
                <br/>
                <div className="login-text-center">   
                <Link to="/"  className="outlined-button" style={{ color: 'white', textDecoration:"none" }}> Home </Link>&nbsp;       
                <Link to="/login" className="outlined-button" style={{ color: 'white', textDecoration:"none" }}> Log In Instead</Link>
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

export default Signup