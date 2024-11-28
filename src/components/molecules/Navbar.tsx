import { Link } from 'react-router-dom'; // Usando React Router para navegação

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/sobre" className="navbar-link">
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/projetos" className="navbar-link">
            Projetos
          </Link>
        </li>
        <li>
          <Link to="/contato" className="navbar-link">
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;