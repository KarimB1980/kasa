import React from 'react'
import Logements from '../datas/logements.json'
import { useParams } from 'react-router-dom';

// Création du menu déroulant Description
export default function Description() {
  // Récupération ID du cocktail  
  const { logementid } = useParams()
  // Récupération des informations du logement sélectionné 
  const ficheLogement = Logements.find(logement => logement.id === logementid);

  class DescriptionAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.descriptionAffichage = this.descriptionAffichage.bind(this);
      this.descriptionMasquage = this.descriptionMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    descriptionAffichage() {
      this.setState({texteEstAffiche: true});
    }

    descriptionMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.descriptionMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.descriptionAffichage} />;
      }

      return (
        <div>
          {button}
          <Texte texteEstAffiche={texteEstAffiche} />
        </div>
      );
    }
  }

  function TextAffiche(props) {
    return (
      <div className='textedescription'>
        {ficheLogement.description}
      </div>
    )
  }

  function TextMasque(props) {
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
      <button onClick={props.onClick} id="boutondescription" class="bouton"> Description <em class="fa fa-angle-down"></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutondescription" class="bouton"> Description <em class="fa fa-angle-up"></em></button>
    );
  }

  return (
    <div id='description'>
      <DescriptionAffichageMasquage/>
    </div>
  )
}