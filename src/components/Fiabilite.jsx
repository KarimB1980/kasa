import React from 'react'

export default function Fiabilite() {
  class FiabiliteAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.fiabiliteAffichage = this.fiabiliteAffichage.bind(this);
      this.fiabiliteMasquage = this.fiabiliteMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    fiabiliteAffichage() {
      this.setState({texteEstAffiche: true});
    }

    fiabiliteMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.fiabiliteMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.fiabiliteAffichage} />;
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
        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.
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
      <button onClick={props.onClick} id="boutonfiabilite" class="bouton"> Fiabilité <em class="fa fa-angle-down"></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutonfiabilite" class="bouton"> Fiabilité <em class="fa fa-angle-up"></em></button>
    );
  }

  return (
    <div id='fiabilite'>
      <FiabiliteAffichageMasquage/>
    </div>
  )
}