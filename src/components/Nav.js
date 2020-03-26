import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {checkToken} from '../hooks/ApiHooks';
import {withRouter} from 'react-router-dom';

const Nav = ({history}) => {
  useEffect(()=>{
    const checkUser = async () => {
      if (localStorage.getItem('token') !==null) {
        try {
          const userdata= await checkToken(localStorage.getItem('token'));
          console.log(userdata);
        } catch (e) {
          history.push('/');
        }
      };
    };
    checkUser();
  }, [history]);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Nav);
