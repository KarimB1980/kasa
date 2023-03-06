import React from 'react'

// Création du menu déroulant Dropdown
export default function Dropdown({intitulé, description}) {

  class DropdownAffichageMasquage extends React.Component {
    constructor(props) {
      super(props);
      this.dropdownAffichage = this.dropdownAffichage.bind(this);
      this.dropdownMasquage = this.dropdownMasquage.bind(this);
      this.state = {texteEstAffiche: false};
    }

    dropdownAffichage() {
      this.setState({texteEstAffiche: true});
    }

    dropdownMasquage() {
      this.setState({texteEstAffiche: false});
    }

    render() {
      const texteEstAffiche = this.state.texteEstAffiche;
      let button;

      if (texteEstAffiche) {
        button = <BoutonMasquageTexte onClick={this.dropdownMasquage} />;
      } else {
        button = <BoutonAffichageTexte onClick={this.dropdownAffichage} />;
      }

      return (
        <div className='dropdownbouton'>
          {button}
          <Texte texteEstAffiche={texteEstAffiche} />
        </div>
      );
    }
  }

  function TextAffiche() {
    return (
      <div className='texte'>
        {description}
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
      <button onClick={props.onClick} className="boutondropdown" id={intitulé} > {intitulé} <em className='fa fa-angle-down'></em></button>
    );
  }

  function BoutonMasquageTexte(props) {
    return (
      <button onClick={props.onClick} className="boutondropdown" id={intitulé} > {intitulé} <em className='fa fa-angle-up'></em></button>
    );
  }

  return (
    <div className='dropdown'>
      <DropdownAffichageMasquage/>
    </div>
  )
}