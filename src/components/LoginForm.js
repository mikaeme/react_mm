import React from 'react';
import useLoginForm from '../hooks/LoginHooks';
import PropTypes from 'prop-types';
import {login} from '../hooks/ApiHooks';

const LoginForm = (props) => {
  const doLogin = ()=> {
    login(inputs);
  };
  const {inputs, handleInputChange, handleSubmit} = useLoginForm(doLogin);
  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange ={handleInputChange}
          value={inputs.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange ={handleInputChange}
          value={inputs.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
