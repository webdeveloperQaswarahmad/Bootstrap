import React from "react";
import "react-bootstrap";
import {Link,useNavigate} from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Nav from 'react-bootstrap/Nav';
import download5 from "../assets/download5.jpg";
import download4 from "../assets/download4.png";
import download6 from "../assets/download6.jpg";
import download7 from "../assets/download7.jpg";
import download8 from "../assets/download8.jpg";
import download9 from "../assets/download9.jpg";
import Cards from "./Cards";

function Home() {
  const navigate = useNavigate();
    const Shop=()=>{
        navigate("/Services");
    }
  return (
    <div className="container-fluid">
      <div className="row  ">
        <div className="col-md-6 ">
          <img src={download9} height="100" alt="Avatar" />

          <img src={download5} height="300" alt="Avatar" />
          <img src={download6} height="160" alt="Avatar" />

          <img className="m-auto" src={download4} height="130" alt="Avatar" />
          <img src={download7} height="160" alt="Avatar" />
          <img className="m-auto" src={download8} height="130" alt="Avatar" />
        </div>
        <div className="col-md-6 mt-5">
          <div className="mt-5">
            <h2
              className="text-center"
              style={{ color: "orange", fontFamily: "monospace" }}
            >
              Welcome to Munfirm
            </h2>
            <h1 className="w-50 m-auto fs-1 fw-bold">
              Organic Foods & Vegetables
            </h1>
            <h5 className="text-center mt-3">
              25 Years of experience in agriculture farming{" "}
            </h5>
            <div className="text-center mt-3">
              <Button className="w-25" variant="success" onClick={()=>Shop()}>
                Shop Now
              </Button>{" "}
              <Button className="w-25" variant="success">
                Learn More
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
  <div className="row">
    <div className="text-center mt-5">
        <p className="fs-1" style={{ color: "orange", fontFamily: "monospace" }}>Popular Foods and vegetables</p>
        <p className="fs-1">Quality Fruits & Vegetables</p>
    </div>
    <div>
      <Cards/>
    </div>
    <div className="text-center opacity-50">
      <p>©OrganicFirm.2022.All rights reserved </p>
    </div>

  </div>
    </div>
  );
}
export default Home;
