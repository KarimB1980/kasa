import React from 'react';
import './Rating.css'
import Logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'
import EtoilePleine from '../rating/EtoilePleine.png'
import EtoileVide from '../rating/EtoileVide.png'

// Création de la page de détail d'un logement
export default function Notation() {
// Récupération de l'ID du logement
const { logementid } = useParams()
// Récupération des informations du logement sélectionné
const ficheLogement = Logements.find(logement => logement.id === logementid)
  let notation = [];
  let EtoileRouge = true;
  for (let index = 0; index < 5; index++) {
    if(index === parseInt(ficheLogement.rating)) {
      EtoileRouge = false;
    }
    if(EtoileRouge === true) {
        notation.push(<img key={index} className="etoile" src={EtoilePleine} alt={`NotationLogement`}/>)
    } else {
        notation.push(<img key={index} className="etoile" src={EtoileVide} alt={`NotationLogement`}/>)
    }
  }
  return (
    <div className="notation">
        {notation}
    </div>
  )
}