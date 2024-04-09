// SignUpPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <p>Sign up form goes here</p>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  );
}

export default SignUpPage;
