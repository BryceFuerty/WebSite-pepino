
import './App.css';
import HeaderBar from './components/AppBar';
import Footer from './components/Footer';
import { Contact } from './screens/Contact';
import { Home } from './screens/Home';
import { NavLink, Route,Routes } from 'react-router-dom';
import LogoBack from './logo-noir-or-vecto-uni_1.png'
import Gallery from './screens/Gallery';
import ImagePep from '../profil.jpg';
import './styles.css';
import { Box, Container } from '@mui/material';
import Testnav from './components/Testnav'

function App () {
  return (
    <>
      <HeaderBar />
      <main>
        <div style={{ marginTop: '50px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
