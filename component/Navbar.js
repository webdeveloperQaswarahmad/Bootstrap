import React from "react";
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavItems(){
    return(
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mt-1  ">
              <Navbar bg="light " variant="dark" >
        
        
          <Nav className="m-auto">
          <Navbar.Brand className="text-primary me-2 ms-2 active"   href="/RestaurantList">List</Navbar.Brand>
          
            <Nav.Link   className="text-dark ms-2 me-2 active "   href="/Si">Create</Nav.Link>
            <Nav.Link className="text-dark ms-2 me-2 active"  href="/Sib">Search</Nav.Link>
            
            
            
          </Nav>
          </Navbar>
        </div>
        </div>
        </div>
            
        </div>
    )
}
export default NavItems;