import React, { useState,useEffect } from "react";
import 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function AddRestaurant(){
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[rating,setRating]=useState("")
    const[address,setAddress]=useState("")

    



    function saveUser(e){
      e.preventDefault();
      console.warn({name,email,rating,address});
      let data ={name,email,rating,address}
      fetch("http://localhost:3000/restaurant",{
        method:'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }).then((result)=>{
        // console.warn("result",result);
        result.json().then((response)=>{
                console.warn("response",response);
        })
      })
    }
    
    

    return(
        <div>
            <h4 className="text-center text-dark mt-3 mb-3" >Add Restaurant Here</h4>
            <Form className="w-25 mx-auto h-100 ">
      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicEmail">
        <Form.Label>Restaurant Name</Form.Label>
        <Form.Control type="text" required name="name" value={name} placeholder="Restaurant Name" onChange={(e)=>{setName(e.target.value)}} />
        
      </Form.Group>

      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Restaurant Email</Form.Label>
        <Form.Control type="email" required name="email" value={email} placeholder="Restaurant Email" onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>
     
      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Restaurant Rating</Form.Label>
        <Form.Control type="number" required name="rating" value={rating} placeholder="Restaurant Rating" onChange={(e)=>{setRating(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3 mt-1 text-dark" controlId="formBasicPassword">
        <Form.Label>Restaurant Address</Form.Label>
        <Form.Control type="text" required name="address" value={address} placeholder="Restaurant Address" onChange={(e)=>{setAddress(e.target.value)}} />
        <Button onClick={saveUser} variant="primary" type="submit" className="mt-3 mb-5">
        Add Restaurant 
      </Button>
      </Form.Group>
      
      
    </Form>
        </div>
    )
}
export default AddRestaurant;