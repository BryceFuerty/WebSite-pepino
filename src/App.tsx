
import './App.css';
import HeaderBar from './components/AppBar';
import Footer from './components/Footer';
import { Contact } from './screens/Contact';
import { Home } from './screens/Home';
import { NavLink, Route,Routes } from 'react-router-dom';
import LogoBack from './logo-noir-or-vecto-uni_1.png'
import Gallery from './screens/Gallery';
import ImagePep from '../profil.jpg'

function App () {
  return (
    <div>
      <html>

        <body>
          <link href="https://fonts.cdnfonts.com/css/samarkan" rel="stylesheet"></link>
          <div className='background-layer'></div>
          

          <header>
            <HeaderBar/>
          </header>

          <div className='BackgroundImg'>
          </div>

          <div className='container mt-10'>
          
          <div style={{marginTop:'50px'}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
          </div>
          </div>
        </body>
        
        <footer>
          <Footer/>
        </footer>
        </html>
    </div>
    
  );
};

export default App;
