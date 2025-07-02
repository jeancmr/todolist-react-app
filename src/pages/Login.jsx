import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../components/Button';
import ForgottenPassword from './ForgottenPasswordForm';
import RegisterForm from './RegisterForm';

const Login = ({ onOpenModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill all fields');
      return;
    }
    navigate('/');
  };

  return (
    <section className="section-login bg-gray-900 text-white h-screen flex items-center justify-center">
      <div className="login shadow-black shadow-lg p-8 rounded-md  w-lg">
        <header className="login-header">
          <h1 className="text-4xl">Log In</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="form-actions">
            <Button
              text={'Forgot my password'}
              className="text-xs btn-action hover:underline cursor-pointer"
              onClick={() => onOpenModal(<ForgottenPassword />)}
            />
            <Button
              text={'Create an account'}
              className="text-xs btn-action hover:underline cursor-pointer"
              onClick={() => onOpenModal(<RegisterForm />)}
            />
          </div>
          <button type="submit" className="btn">
            Log in
          </button>
        </form>
      </div>
    </section>
  );
};
export default Login;
