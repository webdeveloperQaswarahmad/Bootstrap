import React, { useEffect, useState } from "react";
import "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import {Link,useNavigate} from 'react-router-dom'
import TwitterIcon from "@material-ui/icons/Twitter";
import CheckIcon from "@material-ui/icons/Check";
import { Button, Card } from "react-bootstrap";
import download2 from '../assets/download2.jpg'

function RestaurantList() {
  const navigate = useNavigate();
  const Services=()=>{
      navigate("/Services");
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/restaurant").then((result) => {
      result.json().then((response) => {
        // console.warn("result",response)
        setData(response);
       
      
      });
    });
  }, []);
  // console.warn(data);



  function getList(){
    fetch("http://localhost:3000/restaurant").then((result) => {
      result.json().then((response) => {
        // console.warn("result",response)
        setData(response);
      
        // setSubscription(response[0].subscription)
      });
    });
  }


  function deleteUser(id){
    fetch(`http://localhost:3000/restaurant/${id}`,{
      method:'DELETE'
    }).then((result)=>{
    result.json().then((response)=>{
      console.warn(response);
      getList()
    })
    })
   }

  return (
    <div>
      <h1 className="text-center text-dark mb-3">RestaurantList</h1>
      <div className="container">
        <div className="row">
          {data.map((item, i) => (
            <div className="col-md-3">
            
              <Card className="text-center bg-dark text-white mb-3">
              <Nav.Link className="text-white  active"  onClick={()=>Services()}>
                <img  src={download2} height="230" width="260" alt="Avatar" />
                
                <h5 className="mb-3 mt-2">{item.name}</h5>
                <h5 className="mb-5">{item.email}</h5>
                </Nav.Link>
                <div className="d-flex justify-content-center  mb-1 ">
                  <Button className="me-1">{item.address}</Button>
                  <Button className="ms-1">❤️{item.rating}</Button>
                  {/* <Button className="ms-1">#{item.id}</Button> */}
                   <Button className="ms-1" onClick={()=>deleteUser(item.id)}>Delete</Button>
                </div>
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
  );
}
export default RestaurantList;
