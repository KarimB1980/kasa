import React from 'react'

// Création du menu déroulant Sécurité
export default function Securite() {
  class SecuriteAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.securiteAffichage = this.securiteAffichage.bind(this);
      this.securiteMasquage = this.securiteMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    securiteAffichage() {
      this.setState({texteEstAffiche: true});
    }

    securiteMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.securiteMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.securiteAffichage} />;
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
      <div className='texte'>
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
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
      <button onClick={props.onClick} id="boutonsecurite" class="bouton"> Sécurité <em class="fa fa-angle-down"></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutonsecurite" class="bouton"> Sécurité <em class="fa fa-angle-up"></em></button>
    );
  }

  return (
    <div id='securite'>
      <SecuriteAffichageMasquage/>
    </div>
  )
}