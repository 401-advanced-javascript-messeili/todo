import React, { useState, useContext } from 'react';
import { LoginContext } from '../../context/context';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './forms.scss';

// const If = (props) => {
//   return props.condition ? props.children : null;
// };

function Signup() {
  const signupContext = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'role') {
      setRole(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'email') {
      setEmail(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    signupContext.signup(username, password, role, email);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} id='form-signup'>
        <h3>signup</h3>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>username</Form.Label>
          <Form.Control type='text' placeholder='username' name='username' onChange={handleChange} />
          <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' name='password' onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>role</Form.Label>
          <Form.Control type='text' placeholder='role' name='role' onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>email</Form.Label>
          <Form.Control type='email' placeholder='email' name='email' onChange={handleChange} />
        </Form.Group>
        <Button variant='primary' type='submit'>
          signup
        </Button>
      </Form>
    </>
  );
}

export default Signup;
