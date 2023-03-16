import React from 'react'
import DonneesJSON from '../datas/logements.json'
import { Link } from "react-router-dom"

// Affichage des cartes des logements
export default function AffichageDonneesJSON(){
  const Logements=DonneesJSON.map(
    (informations)=>{
      return(
        <article className='logement' key={informations.id}>
          <div className='imagelogement'>
            <Link to={`/fichelogement/${informations.id}`}>
              <img src={informations.cover} alt="imageLogement" />
            </Link>
          </div>
          <div className='titrelogement' >
            <h2>{informations.title}</h2>
          </div>
        </article>
      )
    }
  )

  return(
    <div className='logements'>
      {Logements}
    </div>
  )
}