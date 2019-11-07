import React from 'react';
import LoginForm from '~components/forms/LoginForm';

const Login = props => {
  return (
    <div className='login-page'>
      <div className='login-container'>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
