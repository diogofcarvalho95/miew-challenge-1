// WelcomePage.tsx
import React from 'react';
import Title from '../components/Title';
import Intro from '../components/Intro';
import Button from '../components/Button';

const WelcomePage: React.FC = () => {
  return (
    <div className='container gap-20'>
      <img width="300" src="undraw_savings_re_eq4w.svg" alt="Welcome" loading='lazy'/>
      <Title text="Know where your money goes"/>
      <Intro text="Track your transaction easily, with categories and financial report"/>
      <div className="d-flex flex-col w-100 gap-5">
        <Button to="/login" text="Login" />
        <Button to="/signup" text="Sign Up" invert />
      </div>
    </div>
  );
}

export default WelcomePage;
