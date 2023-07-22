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
import './Login.css'


import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
// import { tokens } from "@mui/system";

const Login = () => {
  //const theme = useTheme();
  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };
  //const colors = tokens(theme.palette.mode);
  // const handleReset = () => {
  //   setLoginDetail({
  //     username: "",
  //     password: "",
  //   });
  // };

  // const handleforgotPassword = () => {
  //   navigate("/forgotpass");
  // };

  const handleforgotRegsiter = () => {
    navigate("/signup");
  };


  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Username or Password  is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log(data)
          navigate("/main/");
          console.log("login detail is saved to localstorage");

        });

       alert("Login Success");
      })
      .catch((error) => {
        // console.log(error);
        // if (error.response.status == 400 || error.response.status == 404) {
        //   toast.error(error.response.data.message);
        // } else {
          toast.error("Something went wrong  on sever !!");
        }
      );
  };

  return (
<div style={{backgroundImage: "linear-gradient(#645CBB, white)"}}>
    <Container className="login-container" style={{backgroundImage: "linear-gradient(#645CBB, white)"}}>
    <Row className="login-row">
    <Col className="login-col" sm={{ size: 6}}>
            
            <Card inverse style={{ backgroundColor: '#645CBB' }}>
              <CardHeader>
              <center><h3 style={{fontFamily:"Montserrat", fontWeight:"800"}}>LOGIN PAGE</h3></center>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit} >
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                      required = "true"
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                      required = "true"
                    />
                  </FormGroup>

                  <div className="login-text-center">
                    <Button color="light" outline>
                      Login
                    </Button>
                    <Button color="light" outline
                      onClick={handleforgotRegsiter}
                      className="ms-2"
                    >
                      Register
                    </Button>
                    </div>
                    <br/>
                    <div className="login-text-center">
                    <Link to="/"  className="outlined-button" style={{ color: 'white', textDecoration:"none" }}> Home </Link>&nbsp;<Link to="/forgotpass"  className="outlined-button" style={{ color: 'white', textDecoration:"none" }}> Forgot Password </Link> 
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

export default Login;