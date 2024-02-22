
import './App.css';
import HeaderBar from './components/AppBar';
import SecondaryHeaderBar from './components/SecondaryAppBar'
import Footer from './components/Footer';
import { Contact } from './screens/Contact';
import { Home } from './screens/Home';
import { NavLink, Route,Routes, useLocation } from 'react-router-dom';
import LogoBack from './logo-noir-or-vecto-uni_1.png'
import Gallerys from './screens/Gallery';
import ImagePep from '../profil.jpg';
import './styles.css';
import { Box, Container } from '@mui/material';
import Testnav from './components/Testnav'

function App() {
  const location = useLocation();

  const isGallery = location.pathname === '/gallery' || location.pathname === '/contact';
  

  return (
    <>
     {isGallery ? (
     <SecondaryHeaderBar/>
  ) : (
    <HeaderBar/> 
      )}
      
      <main style={{ marginTop: isGallery ? '20px' : '200px' }}>
        <div style={{ marginTop: isGallery ? '20px' : '200px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallerys />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}


export default App;
