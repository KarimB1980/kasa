import React from 'react'
import Logements from '../datas/logements.json'
import { useParams } from 'react-router-dom';

// Création du menu déroulant Equipements
export default function Equipements() {
  // Récupération ID du cocktail  
  const { logementid } = useParams()
  // Récupération des informations du logement sélectionné 
  const ficheLogement = Logements.find(logement => logement.id === logementid);

  class EquipementsAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.equipementsAffichage = this.equipementsAffichage.bind(this);
      this.equipementsMasquage = this.equipementsMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    equipementsAffichage() {
      this.setState({texteEstAffiche: true});
    }

    equipementsMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.equipementsMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.equipementsAffichage} />;
      }

      return (
        <div className='equipements'>
          {button}
          <Texte texteEstAffiche={texteEstAffiche} />
        </div>
      );
    }
  }

  const AffichageEquipements = ficheLogement.equipments.map(
    (equipements)=>{
      return(
        <article className='equipement' key={equipements}>
          {equipements}
        </article>
      )
    }
  )

  function TextAffiche() {
    return (
      <div className='texteequipements'>
        {AffichageEquipements}
      </div>
    )
  }

  function TextMasque() {
    return (
      <div className='rien'>
      </div>
    )
  }

  function Texte(props) {
    const texteEstAffiche = props.texteEstAffiche;
    if (texteEstAffiche) {
      return <TextAffiche />;
    }
    return <TextMasque />;
  }

  function BoutonAffichageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutonequipements" className='bouton'> Equipements <em className='fa fa-angle-down'></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutonequipements" className='bouton'> Equipements <em className='fa fa-angle-up'></em></button>
    );
  }

  return (
    <div id='equipements'>
      <EquipementsAffichageMasquage/>
    </div>
  )
}