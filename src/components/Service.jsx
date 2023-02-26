import React from 'react'

// Création du menu déroulant Service
export default function Service() {
  class ServiceAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.serviceAffichage = this.serviceAffichage.bind(this);
      this.serviceMasquage = this.serviceMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    serviceAffichage() {
      this.setState({texteEstAffiche: true});
    }

    serviceMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.serviceMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.serviceAffichage} />;
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
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
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
      <button onClick={props.onClick} id="boutonservice" class="bouton"> Service <em class="fa fa-angle-down"></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} id="boutonservice" class="bouton"> Service <em class="fa fa-angle-up"></em></button>
    );
  }

  return (
    <div id='service'>
      <ServiceAffichageMasquage/>
    </div>
  )
}