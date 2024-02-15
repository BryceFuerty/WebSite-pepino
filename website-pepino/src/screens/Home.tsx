
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; // Grid version 1
import Card from '@mui/material/Card'; // Grid version 1
import './Home.css'
import ImagePep from '../profil.jpg'
import { Container } from '@mui/material';
import { PDFDownloader } from '../components/DowloadPDF';;
import SwipeCenter from '../components/SwiperCenter';
import { ContactUs } from '../components/ContactForm';



export const Home = () =>  {
  return (
    
  <div>
      <Box component="main" sx={{ pt: 8, flexDirection: 'column', alignItems: 'center', textAlign: 'center', display: 'flow-root' }}>
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
      </Box>

      <Box sx={{ backgroundColor: "#F9F9F9", paddingTop: "50px", paddingBottom: "50px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography className='TitleAbout' sx={{ fontSize: "35px", fontFamily: 'Roboto-Bold' }}>
          Mes tatouages
        </Typography>

        <div className='SwipperHome' style={{ marginTop: '20px' }}>
          <SwipeCenter />
        </div>
      </Box>


      <Box>
        <div className='About'>
          <div className='TextAbout'>
            <h2 className='TitleAbout' style={{fontSize: "2.8rem"}}>Comment prendre soin de mon tatouage ?</h2>
            <p className='DescAbout'>
              Retrouver ici un fichier PDF contenant toutes les instructions nécessaire a l'entretien de votre tatouage
            </p>
          </div>
          <div className='ImgAboutDiv' style={{paddingTop:"40px"}}>
            <PDFDownloader/>
          </div>
        </div>
        
      </Box>

  </div>
   
  );
}
