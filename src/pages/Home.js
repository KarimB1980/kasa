import React from 'react';
import './Home.css'
import '../components/Header.css'
import '../components/Footer.css'
import '../components/Logement.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import AffichageDonneesJSON from '../components/Logement'

// Création de la page d'accueil
export default function Home() {
  return (
    <div className="App">
      <Header/>

      <div id="titre">
        <h1>
          <span>Chez vous, </span> 
          <span>partout et ailleurs</span>
        </h1>
      </div>

      <AffichageDonneesJSON/>

      <Footer/>
    </div>
  )
}