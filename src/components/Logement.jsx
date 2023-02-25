import React from 'react'
import DonneesJSON from '../datas/logements.json'
import { Link } from "react-router-dom";

export default function AffichageDonneesJSON(){
  const Logements=DonneesJSON.map(
    (informations)=>{
      return(
        <article className='logement'>
          <div className='imagelogement'>
            <Link to={`/fichelogement/${informations.id}`}>
              <img src={informations.cover} alt="imageLogement" />
            </Link>
          </div>
          <div className='titrelogement'>
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