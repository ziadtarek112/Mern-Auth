import { Button, Col, Form, Row } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useEffect, useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/userApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password , setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[login , {isLoading}] = useLoginMutation();

  const {userInfo} = useSelector((state)=> state.auth);


  useEffect(()=>{
    if(userInfo){
        navigate('/')
    }

  },[navigate , userInfo])

  const submitHandler =async(e)=>{
    e.preventDefault();
    try {
        const res = await login({email , password}).unwrap();
        dispatch(setCredentials({...res}));
    }
    catch(err){
        toast.error(err?.data?.message || err.error);
    }
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
        {isLoading && <Loader/>}
        <Button type="submit" variant="primary" className="mt-3">Sign in</Button>
        <Row className="py-3">
            <Col>New Customer ? <Link to='/register'>Register</Link> </Col>
        </Row>
      </form>
    </FormContainer>
  );
};

export default Login;
