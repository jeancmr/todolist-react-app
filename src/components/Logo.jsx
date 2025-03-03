import logo from '../assets/logo.svg';

const Logo = () => {
  return (
    <div className="header-logo">
      <img className="h-10" src={logo} alt="Logo" />
      <h1 className="text-4xl cursor-default">TodoList</h1>
    </div>
  );
};
export default Logo;
