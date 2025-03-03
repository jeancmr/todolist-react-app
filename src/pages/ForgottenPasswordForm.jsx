import { useState } from 'react';

const ForgottenPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feature incoming');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-3xl mb-4">Forgot Password</h2>
      <p>Please enter your email address. We&apos;ll send you a code to resend your Password</p>
      <div className="flex flex-col mt-8">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#4d4949] py-3 px-6 rounded-md w-full text-white focus:outline-none"
        />
        <button type="submit" className="btn">
          Reset password
        </button>
      </div>
    </form>
  );
};
export default ForgottenPassword;
