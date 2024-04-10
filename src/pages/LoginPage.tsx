import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Intro from '../components/Intro';
import LoginForm from '../components/Form/LoginForm';

const LoginPage: React.FC = () => {

  const handleLoginSuccess = () => {
    // Handle successful login, if needed
  };

  return (
    <div className='container gap-20'>
      <img width="300" src="undraw_login_re_4vu2.svg" alt="Login" loading='lazy'/>
      <Title text="Login"/>
      <Intro text="Welcome! Please enter your credentials to log in."/>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <p>Don’t have an account yet? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default LoginPage;
