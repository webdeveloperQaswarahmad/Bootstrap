import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import "react-bootstrap";

export class ResturantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
    };
  }
  search(key) {
    console.warn(key);
    fetch("http://localhost:3000/services?q=" + key).then((response) => {
      response.json().then((result) => {
        console.warn("result;", result);
        this.setState({ search: result });
      });
    });
  }

  render() {
    return (
      <div>
        <h5 className="text-center">Search Services</h5>

        <Form.Group className="mb-3 w-25 mx-auto" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Search Services"
            onChange={(event) => this.search(event.target.value)}
          />
        </Form.Group>
      </div>
    );
  }
}

export default ResturantSearch;
