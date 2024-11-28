import Navbar from '../molecules/Navbar';
import Logo from '../atoms/Logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;