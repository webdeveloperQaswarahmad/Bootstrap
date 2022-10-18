import React from "react";
import {Link,useNavigate} from 'react-router-dom'
// import ArrowIcon from '@material-ui/icons/Arrow';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"

function NavItems(){
    const navigate = useNavigate();
    const Restaurant=()=>{
        navigate("/RestaurantList");
    }
    const Home=()=>{
        navigate("/");
    }
    const AddRestaurant=()=>{
        navigate("/RestaurantCreate")
    }
    const AddServices=()=>{
        navigate("/AddServices")
    }
    const Services=()=>{
        navigate("/Services")
    }
    const RestaurantSearch=()=>{
        navigate("/RestaurantSearch")
    }
    const detail=()=>{
        navigate("/RestaurantDetail")
    }
    const Update =()=>{
        navigate("/RestaurantUpdate")
    }
    const Profile =()=>{
        navigate("/Profile")
    }
    const Login =()=>{
        navigate("/Login")
    }

    const handleClick=()=>{
        localStorage.clear();
        window.location.reload();
    }

    return(
        <div>
            <div className="container-fluid  ">
                <div className="row">
                    <div className="col-md mt-1  ">
                     <Navbar bg="dark " className="text-white rounded" variant="dark" >
                     <Navbar.Brand className="text-primary  active"   onClick={()=>Home()}>
                     <img className="" src={logo} height="30" alt="Avatar"/> 
                     </Navbar.Brand>
                      <Nav className="m-auto">
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      {/* <Navbar.Brand className="text-white"> You Just One CLick Away →→ </Navbar.Brand> */}
                      
                      <Navbar.Brand className="text-primary  active"   onClick={() => Home()}>Home</Navbar.Brand>
                      <Nav.Link className="text-white  active"   onClick={() => Restaurant()}>Restaurants</Nav.Link>
                      <Nav.Link   className="text-white  active "   onClick={()=>AddRestaurant()}>Add Restaurant</Nav.Link>
                      <Nav.Link   className="text-white  active "   onClick={()=>AddServices()}>Add Services</Nav.Link>
                      <Nav.Link   className="text-white  active "   onClick={()=>Services()}> Services</Nav.Link>

                      {/* <Nav.Link className="text-white  active"  onClick={()=>RestaurantSearch()}>Search</Nav.Link> */}
                      {/* <Nav.Link className="text-white  active"  onClick={()=>detail()}>Detail</Nav.Link> */}
                      <Nav.Link className="text-white  active"  onClick={()=>Update()}>Update</Nav.Link>
                      <Nav.Link className="text-white  active" onClick={handleClick}  >Logout</Nav.Link>
                      <Nav.Link className="text-white  active"  onClick={()=>Login()}>Login</Nav.Link>
                      </Navbar.Collapse>
                     </Nav>
                    </Navbar>
                    </div>
                </div>
            </div>            
        </div>
    )
}
export default NavItems;