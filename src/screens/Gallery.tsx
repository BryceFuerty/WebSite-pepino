import React from 'react';
import ListImage from '../components/ListImage'; // Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de fichiers
import Img1 from '../Floral.jpg'
import Img2 from '../Geometric.jpg'
import Img3 from '../Realistic.jpg'
import SingleLineImageList from  "../components/ListImage"

const Gallery: React.FC = () => {
  

  return (
    <div style={{paddingTop:"50px"}}>
      <h1>Ma Galerie</h1>
      <SingleLineImageList/>
    </div>
  );
};

export default Gallery;
