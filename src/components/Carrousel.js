import React, { useState } from 'react';
import Logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import FlecheGauche from '../boutons/FlecheGauche.png'
import FlecheDroite from '../boutons/FlecheDroite.png'

// Création du carrousel
const Carroussel = () => {

  // Récupération ID du cocktail  
  const { logementid } = useParams()
  // Récupération des informations du logement sélectionné 
  const ficheLogement = Logements.find(logement => logement.id === logementid);

  const [current, setCurrent] = useState(0);
  const lengthImages = ficheLogement.pictures.length;

  const imageSuivante = () => {
    setCurrent(current === lengthImages - 1 ? 0 : current + 1);
  };

  const imagePrecedante = () => {
    setCurrent(current === 0 ? lengthImages - 1 : current - 1);
  };

  if (!Array.isArray(ficheLogement.pictures) || ficheLogement.pictures.length <= 0) {
    return null;
  }

  if (ficheLogement.pictures.length!==1) {
    return (
      <section className='carroussel' >
        <img src={FlecheGauche} className='left-arrow' onClick={imagePrecedante} alt="flechegauche" />
        <img src={FlecheDroite} className='right-arrow' onClick={imageSuivante} alt="flechedroite" />
        {ficheLogement.pictures.map((photo, index) => {
          return (
            <div
              className={index === current ? 'photo active' : 'photo'}
              key={index}>
              {index === current && (
                <img src={photo} alt='imagelogement' className='image' />
              )} 
              {index === current && (
                <div className='numeroimagesurtotal'>{index+1}/{ficheLogement.pictures.length}</div>
              )}
            </div>
          );
        })}
      </section>
    );
  } else {
    return (
      <section className='carroussel' >
        <img src={FlecheGauche} className='left-arrow' onClick={imagePrecedante} alt="flechegauche" />
        <img src={FlecheDroite} className='right-arrow' onClick={imageSuivante} alt="flechedroite" />
        {ficheLogement.pictures.map((photo, index) => {
          return (
            <div
              className={index === current ? 'photo active' : 'photo'}
              key={index}>
              {index === current && (
                <img src={photo} alt='imagelogement' className='image' />
              )}
            </div>
          );
        })}
      </section>
    );
  }
};

export default Carroussel;