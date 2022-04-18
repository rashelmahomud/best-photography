import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../../images/social/github.png';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  // const {singInWighGoogle} = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handelEmailBlur = event => {
    setEmail(event.target.value);

  };
  const handelPasswordBlur = event => {
    setPassword(event.target.value);
  }

  if (user) {
    navigate(from, {replace: true});
  }
  const handeluserSignIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }
  return (
    <div className='container my-5'>
      {/* <button onClick={singInWighGoogle}>google ligin</button> */}
      <h1>Login</h1>
      <div className='w-50 login-box'>
        <Form onSubmit={handeluserSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" required />
          </Form.Group>
          {
            loading && <p>loading....</p>
          }
          <p>{error?.message}</p>
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <p>You can Register Here: <Link to='/signup' className='fw-bold cursor-pointer'>Create an Account</Link></p>


        </Form>
        <SocialLogin></SocialLogin>

      </div>
    </div>
  );
};

export default Login;