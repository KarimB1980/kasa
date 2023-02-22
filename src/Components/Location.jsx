import React from 'react'
import DonneesJSON from '../datas/logements.json'

  function AffichageDonnesJSON(){
    const Logements=DonneesJSON.map(
      (info)=>{
        return(
          <div className='location'>
            <h2>{info.title}</h2>
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
 
export default AffichageDonnesJSON;