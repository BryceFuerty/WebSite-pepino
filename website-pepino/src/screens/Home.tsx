
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
                    
Tatoueur depuis 10 ans, mon travail est essentiellement axé sur les tatouages personnalisés,
je maitrise une large gamme de style, mais je mets l'accent essentiellement sur le tatouage réaliste et ultra réaliste black and grey, le tatouage floral et géométrique (petites et très grosses pièces).
Je me plais également à travailler le style néo traditionnel, japonais, graphique. Mon approche première se fait le plus souvent via un ou deux rdv projet pour établir un premier contact et déterminer les attentes du client et si elles correspondent également à mes exigences techniques afin d'assurer un travail abouti.
Je mets essentiellement l'accent sur l'échange mutuel et la transparence des conseils, je m'efforce également de considérer chaque demande, qu'elle concerne un petit ou un gros tatouage. Je fonctionne également sous forme de salon privé pour une simple
raison de prestation, mon client doit être dans les meilleurs conditions pour apprécier ce moment ! 


                  </p>
                  <p className='DescAbout'>Je ne vends pas des tatouages mais je propose une expérience !</p>
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
