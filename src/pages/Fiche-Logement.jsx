import React from 'react';
import './Fiche-Logement.css'
import { useParams } from 'react-router-dom'
import Logements from '../datas/logements.json'
import '../components/Footer.css'
import '../components/Logement.css'
import '../components/Carroussel.css'
import '../components/Tag.css'
import '../components/Dropdown.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carroussel from '../components/Carroussel'
import Tag from '../components/Tag'
import EtoilePleine from '../rating/EtoilePleine.png'
import EtoileVide from '../rating/EtoileVide.png'
import Dropdown from '../components/Dropdown'

// Création de la page de détail d'un logement
export default function FicheLogement() {
  // Récupération ID du cocktail  
  const { logementid } = useParams()
  // Récupération des informations du logement sélectionné 
  const ficheLogement = Logements.find(logement => logement.id === logementid);

  // Fonction de notation du logement
  function Notation() {
    if (ficheLogement.rating === "0") {
      return (
          <div id='note'>
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
        </div>
      )
    }
    if (ficheLogement.rating === "1") {
      return (
        <div id='note'>
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
        </div>
      )
    }
    if (ficheLogement.rating === "2") {
      return (
        <div id='note'>
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
        </div>
      )
    }
    if (ficheLogement.rating === "3") {
      return (
        <div id='note'>
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
        </div>
      )
    }
    if (ficheLogement.rating === "4") {
      return (
        <div id='note'>
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoileVide} className='etoile-vide' alt="etoilevide" />
        </div>
      )
    }
    if (ficheLogement.rating === "5") {
      return (
        <div id='note'>
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
          <img src={EtoilePleine} className='etoile-pleine' alt="etoilepleine" />
        </div>
      )
    }
  }

  if (ficheLogement) {
    const AffichageEquipements = ficheLogement.equipments.map(
      (equipements)=>{
        return(
          <article className='equipement' key={equipements}>
            {equipements}
          </article>
        )
      }
    )
    
    return (
      <div className="FicheLogement">
        <Header/>

        <Carroussel/>

        <section id="descriptionlogement">
          <div id='titrelocationtags'>
            <h1>{ficheLogement.title}</h1>
            <h2 id="locationlogement">{ficheLogement.location}</h2>
            <Tag/>
          </div>

          <div id='photonomnotation'>
            <div id='photonom'>
              <h2>{ficheLogement.host.name}</h2>
              <img src={ficheLogement.host.picture} alt="photoprofil"></img>
            </div>
            <Notation/>
          </div>
        </section>



        <div id='descriptionequipements'>
          <Dropdown intitulé="Description" description={ficheLogement.description} />
          <Dropdown intitulé="Equipements" description={AffichageEquipements} />
        </div>

        <Footer/>
      </div>
    )
  } else {
    window.location.replace('/errorpage');
  }
}