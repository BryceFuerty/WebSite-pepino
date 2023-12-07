
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Example } from '../components/Carousel';
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from '@mui/material/Card'; // Grid version 1
import './Home.css'
import ImagePep from '../profil.jpg'

export const Home = () =>  {
  return (
    
    <div>
      
    <main>
      <Box component="main" sx={{ pt: 8, flexDirection: 'column', alignItems: 'center', textAlign: 'center',display:'flow-root'}}>
          
        
              <div className='About'>
                <div className='TextAbout'>
                  <h2 className='TitleAbout'>A mon propos</h2>

                  <p className='DescAbout'>
                    Je suis tatoueur depuis plus de 8 ans dans le Shop ##### et je travaille sur tous les styles de tatouage, du réaliste jusqu'au géométrique 
                  </p>
                </div>
                <div className='ImgAboutDiv'>
                  <img src={ImagePep}  alt="Artiste" className='ImgAbout'/>
                </div>
                
              </div>
        <Example />
      </Box>
    </main>
  </div>
   
  );
}
