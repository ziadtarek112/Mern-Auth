import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useState } from "react";
import {Link} from "react-router-dom"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const submitHandler =async()=>{
    console.log('Submitted');
  } 
  return (
    <FormContainer>
      <h1>Sign In</h1>
      <form onSubmit={submitHandler}>

        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
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
        <Button type="submit" variant="primary" className="mt-3">Sign in</Button>
        <Row className="py-3">
            <Col>New Customer ? <Link to='/register'>Register</Link> </Col>
        </Row>
      </form>
    </FormContainer>
  );
};

export default Login;
