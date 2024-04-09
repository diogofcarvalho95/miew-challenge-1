// LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      navigate('/account');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='container gap-20'>
      <img width="300" src="undraw_login_re_4vu2.svg" alt="Login" loading='lazy'/>
      <Title text="Login"/>
      <form onSubmit={handleLogin}>
        <div>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
