import React, { useState, useEffect } from "react";
import "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AddServices() {
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  

  function saveUser(e) {
    e.preventDefault();
    console.warn({ title,  price });
    let data = { title,price  };
    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      // console.warn("result",result);
      result.json().then((response) => {
        console.warn("response", response);
      });
    });
  }

  return (
    <div>
      <h4 className="text-center text-dark mt-3 mb-3">Add Service </h4>
      <Form className="w-25 mx-auto h-100 ">
        <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={title}
            placeholder="enter product name"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        

        <Form.Group
          className="mb-3 mt-1 text-dark"
          controlId="formBasicPassword"
        >
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            
            name="price"
            value={price}
            placeholder="enter product price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>
        
        <Form.Group
          className="mb-3 mt-1 text-dark"
          controlId="formBasicPassword"
        >
          <Form.Label>Enter Product Picture path</Form.Label>
          <Form.Control
            type="text"
            
            name="price"
            value={picture}
            placeholder="enter product picture path"
            onChange={(e) => {
              setPicture(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group
          className="mb-3 mt-1 text-dark"
          controlId="formBasicPassword"
        >
          {/* <Form.Label>Restaurant Address</Form.Label> */}
          {/* <Form.Control type="text" required name="address" value={address} placeholder="Restaurant Address" onChange={(e)=>{setAddress(e.target.value)}} /> */}
          <Button
            onClick={saveUser}
            variant="primary"
            type="submit"
            className="mt-3 mb-5"
          >
            Add Service
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
export default AddServices;
