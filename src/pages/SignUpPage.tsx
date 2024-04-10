// SignUpPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../components/Title';
import Intro from '../components/Intro';
import SignupForm from '../components/Form/SignupForm';

const SignUpPage: React.FC = () => {

  const handleSignupSuccess = () => {
    // Handle successful signup, if needed
  };

  return (
    <div className='container gap-20'>
      <img width="300" src="undraw_sign_up_n6im.svg" alt="Login" loading='lazy'/>
      <Title text="Sign Up"/>
      <Intro text="Ready to get started? Fill out the form below to sign up!"/>
      <SignupForm onSignupSuccess={handleSignupSuccess} />
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default SignUpPage;
