import { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    alert('Feature incoming');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl mb-4">Sign up</h2>
      <p>Please enter your email address and password to create an account</p>
      <div className="flex flex-col mt-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#4d4949] py-3 px-6 rounded-md w-full text-white focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-[#4d4949] py-3 px-6 rounded-md w-full text-white focus:outline-none mt-4"
        />
        <button type="submit" className="btn">
          Sign up
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
