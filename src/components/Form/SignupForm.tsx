// SignupForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './Input/InputField';
import SubmitButton from './Input/SubmitButton';
import './form.scss';

interface SignupFormProps {
  onSignupSuccess: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignupSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSignupSuccess();
    navigate('/account');
  };

  return (
    <form className="form" onSubmit={handleSignup}>
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton label="Sign Up" />
    </form>
  );
};

export default SignupForm;
