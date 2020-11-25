import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../../context/context';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const If = (props) => {
  return props.condition ? props.children : null;
};

function Login() {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = (e) => {
    if (e.target.name === 'password') {
      setPassword(e.target.value);
      console.log(e.target.value);
    } else if (e.target.name === 'username') {
      setUsername(e.target.value);
      console.log(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    context.login(username, password);
  };

  return (
    <>
      <h2>signIn</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='text' placeholder='Enter email' name='username' onChange={handleChange} />
          <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' name='password' onChange={handleChange} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      {/* <If condition={context.loggedIn}>
        <button onClick={!context.loggedIn}>Log Out</button>
      </If>

      <If condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input placeholder='UserName' name='username' onChange={handleChange} />
          <input placeholder='password' name='password' onChange={handleChange} />
          <button>Login</button>
        </form>
      </If> */}
    </>
  );
}

export default Login;
