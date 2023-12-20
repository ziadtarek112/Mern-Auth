import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setCofirmPassword] = useState("");
  return (
    <FormContainer>
      <h1>Sign up</h1>
      <form action="">
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setCofirmPassword(e.target.value);
            }}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Sign in
        </Button>
        <Row className="py-3">
          <Col>
            already have an account ? <Link to="/login">Sign Up</Link>
          </Col>
        </Row>
      </form>
    </FormContainer>
  );
};

export default Register;
