import React from 'react'
import DonneesJSON from '../datas/logements.json'

export default function AffichageDonneesJSON(){
  const Logements=DonneesJSON.map(
    (informations)=>{
      return(
        <div className='location'>
          <div className='imagelocation'>
            <img src={informations.cover} alt="imageLocation" />
          </div>
          <div className='titrelocation'>
            <h2>{informations.title}</h2>
          </div>
        </div>
      )
    }
  )

  return(
    <div className='logements'>
      {Logements}
    </div>
  )
}