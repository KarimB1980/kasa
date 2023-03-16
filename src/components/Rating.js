import React from "react";
import ReactStars from "react-rating-stars-component";
import Logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Notation() {
  const matches = useMediaQuery('(min-width: 768.1px)')
  if (matches) {
  // Récupération ID du cocktail  
    const { logementid } = useParams()
    // Récupération des informations du logement sélectionné 
    const ficheLogement = Logements.find(logement => logement.id === logementid);
    return (
      <ReactStars
        count={5}
        value={parseInt(ficheLogement.rating)}
        edit={false}
        size={40}
        emptyIcon={<i className="far fa-star"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#FF6060"
        color="#E3E3E3"
      />
    )
  } else {
    // Récupération ID du cocktail
    const { logementid } = useParams()
    // Récupération des informations du logement sélectionné 
    const ficheLogement = Logements.find(logement => logement.id === logementid);
    return (
      <ReactStars
        count={5}
        value={parseInt(ficheLogement.rating)}
        edit={false}
        size={20}
        emptyIcon={<i className="far fa-star"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#FF6060"
        color="#E3E3E3"
      />
    )
  }
}