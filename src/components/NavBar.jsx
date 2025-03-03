import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex gap-16 items-center list-none text-xl">
      <li>
        <NavLink to="/" activeClassName="text-red-500">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="text-red-500">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/account" activeClassName="text-red-500">
          Account
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeClassName="text-red-500">
          Log Out
        </NavLink>
      </li>
    </nav>
  );
};
export default NavBar;
