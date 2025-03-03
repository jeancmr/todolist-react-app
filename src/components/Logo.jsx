import logo from '../assets/react.svg';

const Logo = () => {
  return (
    <div className="header-logo">
      <img src={logo} alt="Logo" />
      <h1 className="text-4xl cursor-default">TodoList</h1>
    </div>
  );
};
export default Logo;
