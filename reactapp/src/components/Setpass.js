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
import { setPass } from "../services/user-service";


const Setpassword = () => {
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



  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.username.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("Enter Valid Information!!");
      return;
    }
    else{
        console.log("came here verify pass");
        setPass(loginDetail.username,loginDetail.password)
        .then((response) => {
            console.log(response);
            toast.success("Password Updated Successfully!! ");
            navigate("/login");
            }
        )
        .catch((error) => {
            console.log(error);
            toast.error("Something went wrong!! " + error.message);
        }
        );
    }

};
  return (
<div style={{backgroundImage: "linear-gradient(#645CBB, white)"}}>
      <Container className="login-container" >
        <Row className="login-row">
          <Col
            className="login-col" sm={{ size: 6}}
          >
            <Card style={{ backgroundColor: '#645CBB' }} inverse>
              <CardHeader>
              <center><h3 style={{fontFamily:"Montserrat", fontWeight:"800"}}>Reset Password</h3></center>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter your email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.username}
                      onChange={(e) => handleChange(e, "username")}
                    />
                  </FormGroup>

     

                  <FormGroup>
                    <Label for="password">Enter new password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <div className="login-text-center">
                    <Button color="light" outline>
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container></div>
  );
};

export default Setpassword;