import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "react-bootstrap";
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
import product5 from '../assets/product5.png'



function Cards() {
  return (
    <div className="container">
      <div className="row text-center mb-5 ">
        <div className="col-md-3 mx-auto mt-3 mb-3  ">
          <Card className="bg-light card "  style={{ width: "16rem" }}>
          <img  src={product1} height="130" alt="Avatar" />
            <Card.Body className="text-center view overlay zoom">
              <Card.Title>Organic Brocolli</Card.Title>
              <Card.Text>
                <span className="text-decoration-line-through text-secondary">$25</span>
                <span className="text-success">$18</span>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mx-auto mt-3 mb-3">
          <Card className="bg-light" style={{ width: "16rem" }}>
          <img src={product2} height="130" alt="Avatar" />
            <Card.Body className="text-center">
            <Card.Title>Fresh Carrots</Card.Title>
              <Card.Text>
                <span className="text-decoration-line-through text-secondary">$25</span>
                <span className="text-success">$18</span>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mx-auto mt-3 mb-3">
          <Card className="bg-light" style={{ width: "16rem" }}>
          <img src={product3} height="130" alt="Avatar" />
            <Card.Body className="text-center">
            <Card.Title>Organic Brocolli</Card.Title>
              <Card.Text>
                <span className="text-decoration-line-through text-secondary">$25</span>
                <span className="text-success">$18</span>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 mx-auto mt-3 mb-3 ">
          <Card className="bg-light " style={{ width: "16rem" }}>
          <img src={product5} height="130" alt="Avatar" />
            <Card.Body className="text-center">
            <Card.Title>Organic Brocolli</Card.Title>
              <Card.Text>
                <span className="text-decoration-line-through text-secondary">$25</span>
                <span className="text-success">$18</span>
              </Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cards;
