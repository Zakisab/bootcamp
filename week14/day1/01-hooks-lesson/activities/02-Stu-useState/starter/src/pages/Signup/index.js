import React { useState} from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import { useState } from "react";

const SignupTwo = () => {

  const [ userState, setUser] = useState ({
   name: "",
   password: "",
  });

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input className="form-control" type="text" placeholder="Username" name="username" 
              onChange={(event) => setUser({ ...userState, name: event.target.value })}/>
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={(event) => setUser({ ...userState, name: event.target.value })}/>
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {useState.name}!</h3>
          <p>I probably shouldn't tell you this, but your password is {useState.password}!</p>
        </Container>
      </form>
    </div>
  );
};

export default SignupTwo;
