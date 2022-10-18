import React, { useEffect, useState } from "react";
import {Link,useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import { Button, Card, } from "react-bootstrap";
import download7 from "../assets/download7.jpg";
import download5 from "../assets/download5.jpg";
import Cart from '../component/Cart'

function Services() {
    const [data, setData] = useState([]);
    
  const [users, setUser] = useState([])
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [userId,setUserId]=useState(null)
  useEffect(() => {
    fetch("http://localhost:3000/services").then((result) => {
      result.json().then((response) => {
        // console.warn("result",response)
        setData(response);
      });
    });
  }, []);
  console.warn(data);

  const navigate = useNavigate();
  const Update=()=>{
      navigate("/RestaurantUpdate");
  }

  const Cart=()=>{
      navigate("/Cart");
  }


  function getList(){
    fetch("http://localhost:3000/services").then((result) => {
      result.json().then((response) => {
        // console.warn("result",response)
        setData(response);
        // setSubscription(response[0].subscription)
      });
    });
  }


  function deleteUser(id){
    fetch(`http://localhost:3000/services/${id}`,{
      method:'DELETE'
    }).then((result)=>{
    result.json().then((response)=>{
      console.warn(response);
      getList()
    })
    })
   }

   function selectUser(id)
  {
    let item=users[id-1];
    setTitle(item.title)
        setPrice(item.price)
        setUserId(item.id)
  }
  return (
   <div>
    <div>
      <h1 className="text-center text-dark mb-3">Services</h1>
      <div className="container">
        <div className="row">
          {data.map((item, i) => (
            <div className="col-md-3">
              <Card className="text-center bg-dark text-white mb-3">
                <img src={download7} height="230" alt="Avatar" /> 
                <h5 className="mb-3 mt-2 text-center">{item.title}</h5>
                
                <div className="d-flex justify-content-center w-100  mb-1 ">
                  
                  <Button className="ms-1 text-center">Rs. {item.price} </Button>
                   <Button className="ms-1 text-center" onClick={()=>deleteUser(item.id)}>Delete</Button>
                   <Button  className="ms-1 text-center" href="/RestaurantUpdate" onClick={()=>selectUser(item.id)}>Update</Button>
                   
                </div>
                 <Button style={{width:"15rem",}} onClick={()=>Cart()} className="mb-2 mt-1 text-center   mx-auto bg-dark btn-outline-success">Add to Card</Button>
              </Card>
             
            </div>
          ))}

        </div>
        <div className="row">
            <div className="col-md-3">

            </div>

        </div>
      </div>
    </div>
   </div>
  )
}

export default Services