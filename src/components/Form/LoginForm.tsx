// LoginForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from './Input/InputField';
import SubmitButton from './Input/SubmitButton';
import './form.scss';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLoginSuccess(); 
      navigate('/account');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
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
      <SubmitButton label="Login" />
    </form>
  );
};

export default LoginForm;
