import React from 'react';
import useLoginForm from '../hooks/LoginHooks';
import PropTypes from 'prop-types';
import {login} from '../hooks/ApiHooks';
import {withRouter} from 'react-router-dom';

const LoginForm = ({history}) => {
  const doLogin = async ()=> {
    try {
      // kirjaudu automaagisesti
      const user = await login(inputs);
      console.log(user);
      // siirry etusivulle
      history.push('/home');
    } catch (e) {
      console.log(e.message);
      // TODO: näytä virhe
    }
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

LoginForm.propTypes = {
  history: PropTypes.object,
};

export default withRouter(LoginForm);
