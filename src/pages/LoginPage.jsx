import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks';
import { RegisterForm, ForgottenPassword } from '../components/auth/';
import Button from '../components/Button';

export const LoginPage = ({ onOpenModal }) => {
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

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
            onChange={onInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onInputChange}
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
