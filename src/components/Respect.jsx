import React from 'react'

// Création du menu déroulant Respect
export default function Respect() {
  class RespectAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.respectAffichage = this.respectAffichage.bind(this);
      this.respectMasquage = this.respectMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    respectAffichage() {
      this.setState({texteEstAffiche: true});
    }

    respectMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.respectMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.respectAffichage} />;
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
        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
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
      <button onClick={props.onClick} id="boutonrespect" class="bouton"> Respect <em class="fa fa-angle-down"></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutonrespect" class="bouton"> Respect <em class="fa fa-angle-up"></em></button>
    );
  }

  return (
    <div id='respect'>
      <RespectAffichageMasquage/>
    </div>
  )
}