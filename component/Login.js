import React, { useRef,useEffect } from "react";
import NavItems from "./NavItems";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "react-bootstrap";
import Home from './Home'
import { useNavigate } from "react-router-dom";
// import './LoginWithLocalStorage.css';
import "./login.css";
import { NavItem } from "react-bootstrap";
function Login() {
  const navigate = useNavigate();

  useEffect(()=>{
    const auth= localStorage.getItem('emailData') && localStorage.getItem('passwordData');
      if(auth){
        navigate('/')
      }
  })



  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abc@gmail.com" &&
      password.current.value == "12345"
    ) {
      localStorage.setItem("emailData", "abc@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
  };

  return (
    <div className="Login">
      {getEmail && getPassword ? (
        <div>
        <NavItem/>
        <Home/>
        </div>

      ) : (
        <Form onSubmit={handleSubmit}>
          <div className="mt-5">
            {/* <input type="text" ref={email} />  */}
            <Form.Group className="mb-3 mx-auto" controlId="formBasicEmail">
              {/* <Form.Label className="text-center">Email address</Form.Label> */}
              <Form.Control
                className="w-25 mx-auto"
                type="text"
                placeholder="Enter email"
                ref={email}
              />
            </Form.Group>
          </div>
          <div>
            {/* <input type="password" ref={password} /> */}

            <Form.Group controlId="formBasicPassword">
              {/* <Form.Label>Password</Form.Label> */}
              <Form.Control
                className="w-25 mx-auto"
                type="password"
                placeholder="Password"
                ref={password}
              />
            </Form.Group>
          </div>
          {/* <button>Login</button> */}
          <div className="justify-content-center d-flex mt-3">
            <Button className="w-25 " variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      )}
    </div>
  );
}
export default Login;
