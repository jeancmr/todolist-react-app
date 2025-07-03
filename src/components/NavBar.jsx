import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex gap-16 items-center list-none text-xl">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/account">Account</NavLink>
      </li>
      <li>
        <NavLink to="/login">Log Out</NavLink>
      </li>
    </nav>
  );
};
export default NavBar;
