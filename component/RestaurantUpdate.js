import React,{useEffect,useState} from 'react'
import download7 from "../assets/download7.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function RestaurantUpdate() {
  const [users, setUser] = useState([])
  const [title, setTitle] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [userId,setUserId]=useState(null)

  useEffect(() => {
    getUsers();
  }, [])
  function getUsers() {
    fetch("http://localhost:3000/services").then((result) => {
      result.json().then((resp) => {
        // console.warn(resp)
        setUser(resp)
        setTitle(resp[0].title)
        setPrice(resp[0].price)
        
        setUserId(resp[0].id)
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

  function updateUser()
  {
    let item={title,price}
    console.warn("item",item)
    fetch(`http://localhost:3000/services/${userId}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(item)
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
        getUsers()
      })
    })
  }
  return (
    <div>
    <h4 className="text-center text-dark mt-3 mb-3">Update</h4>
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
          onClick={updateUser} 
          variant="primary"
          type="submit"
          className="mt-3 mb-5"
        >
          Update
        </Button>
      </Form.Group>
    </Form>
  </div>
  )
}

export default RestaurantUpdate