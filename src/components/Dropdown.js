import React, { useState } from 'react'; 

export default function Dropdown({intitule, description}) {

  const [texteEstAffiche, texteEstMasque] = useState(false); 

  function BoutonAffichageTexte() {
    return (
      <button onClick={() => texteEstMasque(!texteEstAffiche)} className="boutondropdown" id={intitule} > {intitule} <em className='fa fa-angle-down'></em></button>
    );
  }

  function BoutonMasquageTexte() {
    return (
      <button onClick={() => texteEstMasque(!texteEstAffiche)} className="boutondropdown" id={intitule} > {intitule} <em className='fa fa-angle-up'></em></button>
    );
  }

  if (texteEstAffiche) {
    return(
      <div className="dropdown" id={`dropdown-${intitule}`}>
      <BoutonMasquageTexte/>
        {
          texteEstAffiche && <div className="texte">{description}</div>
        }
      </div>
    );
  } else {
    return(
      <div className="dropdown" id={`dropdown-${intitule}`}>
      <BoutonAffichageTexte/>
        {
          texteEstAffiche && <div className="texte">{description}</div>
        }
      </div>
    );
  }
}