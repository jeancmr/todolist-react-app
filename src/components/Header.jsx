import Logo from './Logo';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 my-4 rounded-lg bg-neutral-900 text-white">
      <Logo />
      <NavBar />
    </header>
  );
};
export default Header;
