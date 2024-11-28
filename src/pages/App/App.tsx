import './App.css';
import '../../theme/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Sobre from '../Sobre/Sobre';
import Projetos from '../Projetos/Projetos';
import Contato from '../Contato/Contato';
import Navbar from '../../components/molecules/Navbar';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar que vai aparecer em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App
