import React from 'react';
import './Fiche-Logement.css'
import { useParams } from 'react-router-dom';
import Logements from '../datas/logements.json'
import '../components/Footer.css'
import '../components/Logement.css'
import '../components/Carroussel.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Carroussel from '../components/Carroussel'

// Création de la page de détail d'un logement
export default function FicheLogement() {
  // Récupération ID du cocktail  
  const { logementid } = useParams()
  // Récupération des informations du logement sélectionné 
  const ficheLogement = Logements.find(logement => logement.id === logementid);

  return (
    <div className="FicheLogement">
      <Header/>

      <Carroussel/>

      <section id="descriptionlogement">
        <div id='titrelocationphotonom'>
          <h1>{ficheLogement.title}</h1>
          <div id='photonom'>
            <h2>{ficheLogement.host.name}</h2>
            <img src={ficheLogement.host.picture} alt="photoprofil"></img>
          </div>
        </div>
        <h2 id="locationlogement">{ficheLogement.location}</h2>
      </section>

      <Footer/>
    </div>
  )
}