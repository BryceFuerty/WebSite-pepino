import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Scrollbar, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//Import Floral
import floral1 from '../assets/Floral/Floral (1).jpg';
import floral2 from '../assets/Floral/Floral (2).jpg';
import floral3 from '../assets/Floral/Floral (3).jpg';
import floral4 from '../assets/Floral/Floral (4).jpg';
import floral5 from '../assets/Floral/Floral (5).jpg';
import floral6 from '../assets/Floral/Floral (6).jpg';
import floral7 from '../assets/Floral/Floral (7).jpg';
import floral8 from '../assets/Floral/Floral (8).jpg';
import floral9 from '../assets/Floral/Floral (9).jpg';
import floral10 from '../assets/Floral/Floral (10).jpg';

//Import Animaux
import animal1 from '../assets/Animaux/Animaux (1).jpg';
import animal2 from '../assets/Animaux/Animaux (2).jpg';
import animal3 from '../assets/Animaux/Animaux (3).jpg';
import animal4 from '../assets/Animaux/Animaux (4).jpg';
import animal5 from '../assets/Animaux/Animaux (5).jpg';
import animal6 from '../assets/Animaux/Animaux (6).jpg';
import animal7 from '../assets/Animaux/Animaux (7).jpg';
import animal8 from '../assets/Animaux/Animaux (8).jpg';
import animal9 from '../assets/Animaux/Animaux (9).jpg';

//Import Ornementaux
import ornemental1 from '../assets/Ornement/Ornemental (1).jpg';
import ornemental2 from '../assets/Ornement/Ornemental (2).jpg';
import ornemental3 from '../assets/Ornement/Ornemental (3).jpg';
import ornemental4 from '../assets/Ornement/Ornemental (4).jpg';
import ornemental5 from '../assets/Ornement/Ornemental (5).jpg';
import ornemental6 from '../assets/Ornement/Ornemental (6).jpg';
import ornemental7 from '../assets/Ornement/Ornemental (7).jpg';
import ornemental8 from '../assets/Ornement/Ornemental (8).jpg';
import ornemental9 from '../assets/Ornement/Ornemental (9).jpg';

import { Box, FormControl, InputBase, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, styled } from '@mui/material';



// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import './Gallery.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Multiselect from 'multiselect-react-dropdown';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const Gallery: React.FC = () => {

  interface Category {
    name: string;
    id: number;
  }

  const [slidesPerView, setSlidesPerView] = useState(3);
  const floralImg = [floral1,floral2,floral3,floral4,floral5,floral6,floral7,floral8,floral9,floral10];
  const animauxImg = [animal1,animal2,animal3,animal4,animal5,animal6,animal7,animal8,animal9];
  const ornementalImg = [ornemental1,ornemental2,ornemental3,ornemental4,ornemental5,ornemental6,ornemental7,ornemental8,ornemental9];

  const allImg = floralImg.concat(animauxImg,ornementalImg)
  


  const [currentImages, setCurrentImages] = useState(allImg);
  const [filter, setFilter] = useState<string[]>([]);
  const [newSlidesPerView, setnewSlidesPerView] = useState(5)
  
  

  const onInit = () => {
    console.log('lightGallery has been initialized');
};



  useEffect(() => {
    const handleResize = () => {

      console.log(slidesPerView)
      
      if (window.innerWidth >= 1400) {
        setnewSlidesPerView(5);
      } else if (window.innerWidth >= 1100) {
        setnewSlidesPerView(4);
      } else if (window.innerWidth >= 800) {
        setnewSlidesPerView(3);
      }else if (window.innerWidth >= 500) {
        setnewSlidesPerView(2);
      }else {
        setnewSlidesPerView(1);
      }

      setSlidesPerView(newSlidesPerView);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
    

    return () => window.removeEventListener('resize', handleResize);

   
  }
  
  , []);


  const categories = [ {name :"Floral", id:1},{name :"Animal", id:2},{name :"Ornemental", id:3}]
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(categories);



  const onSelect = (selectedList: Category[], selectedItem: Category) => {
    // Utilisez une fonction de rappel pour garantir l'utilisation de l'état le plus récent
    setSelectedCategories((prevSelectedCategories) => [...prevSelectedCategories, selectedItem]);
  
    let selectImg: string[] = [];
  
    selectedList.forEach((element) => {
      if (element.name === "Floral") {
        selectImg = selectImg.concat(floralImg);
      }
      if (element.name === "Animal") {
        selectImg = selectImg.concat(animauxImg);
      }
      if (element.name === "Ornemental") {
        selectImg = selectImg.concat(ornementalImg);
      }
    });
  
    setCurrentImages(selectImg);
  };
  
  const onRemove = (selectedList: Category[], removedItem: Category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.filter((category) => category.id !== removedItem.id)
    );
  
    let selectImg: string[] = [];
  
    selectedList.forEach((element) => {
      if (element.name === "Floral") {
        selectImg = selectImg.concat(floralImg);
      }
      if (element.name === "Animal") {
        selectImg = selectImg.concat(animauxImg);
      }
      if (element.name === "Ornemental") {
        selectImg = selectImg.concat(ornementalImg);
      }
    });
  
    setCurrentImages(selectImg);
  };

  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    try {
      setLightboxIndex(index);
      setLightboxIsOpen(true);
    } catch (error) {
      console.error('Erreur lors de l\'ouverture de la lightbox :', error);
    }
  };
  
  const closeLightbox = () => {
    try {
      setLightboxIsOpen(false);
    } catch (error) {
      console.error('Erreur lors de la fermeture de la lightbox :', error);
    }
  };

  return (
    <>
    
       
  <div style={{display:"flex",justifyContent:"center",paddingBottom:"40px"}}>
  <Typography className='TitleAbout' sx={{ fontSize: "35px", fontFamily: 'Roboto-Bold', paddingBottom:"40px" }}>
    Gallerie image
  </Typography>
  </div>

<div style={{ display: 'grid', gridTemplateColumns: '0.8fr 3.2fr', gap: '20px' }}>
  {/* Colonne du FormControl à gauche */}
  <div style = {{ borderRightWidth: "2px", borderColor: "black", display:"flex", flexDirection: "column"}}>
  
  <Typography sx={{ fontSize: "20px", fontFamily: 'Roboto-Bold', display:"flex",justifyContent:"center" , paddingBottom:"20px"}}>Categorie</Typography>
  <div style={{display:"flex", flexDirection: "row", justifyContent:"center"}}>
  <FormControl variant="standard" style={{ borderWidth:"2px", border:"-moz-initial",display:"flex",alignItems:"center", flexDirection:"row"}}>
  
    <div className='customWidth'>
    <Multiselect
        options={categories} // Options to display in the dropdown
        selectedValues={selectedCategories} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
        className="custom-multiselect"
        />
    </div>
  
  </FormControl>
  </div>
  </div>

  {/* Colonne de la Box (galerie d'images) à droite */}
  <Box>
  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${newSlidesPerView}, 1fr)`, gap: '20px', justifyContent: 'center', margin: '15px' }}>
            {currentImages.map((imageUrl, index) => (
              <img
                key={index}
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>

          {lightboxIsOpen && (
            <Lightbox
              mainSrc={currentImages[lightboxIndex]}
              nextSrc={currentImages[(lightboxIndex + 1) % currentImages.length]}
              prevSrc={currentImages[(lightboxIndex + currentImages.length - 1) % currentImages.length]}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={() => setLightboxIndex((lightboxIndex + currentImages.length - 1) % currentImages.length)}
              onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % currentImages.length)}
            />
          )}

    <div style={{ display:"flex", justifyContent:"center"}}>
      {currentImages.length === 0 ? <p>Aucun résultat</p> : null}
    </div>
  </Box>
</div>
    
    
    </>
  );
};

export default Gallery;
