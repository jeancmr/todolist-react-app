import { useForm } from '../../hooks';

const RegisterForm = () => {
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

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
          onChange={onInputChange}
          className="bg-[#4d4949] py-3 px-6 rounded-md w-full text-white focus:outline-none"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onInputChange}
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
