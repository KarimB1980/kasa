import React from 'react'
import Logements from '../datas/logements.json'
import { useParams } from 'react-router-dom'

// Affichage des cartes des logements
export default function Tag(){
  // Récupération ID du cocktail  
  const { logementid } = useParams()
  // Récupération des informations du logement sélectionné 
  const ficheLogement = Logements.find(logement => logement.id === logementid);
  const lengthTags = ficheLogement.tags;
  const LogementsTag = lengthTags.map(
    (informations)=>{
      return(
        <article className='tag' key={informations}>
          <h3>{informations}</h3>
        </article>
      )
    }
  )

  return(
    <div className='tags'>
      {LogementsTag}
    </div>
  )
}