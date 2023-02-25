import React from 'react';
import './Home.css'
import '../components/Header.css'
import '../components/Footer.css'
import '../components/Logement.css'

import Header from '../components/Header';
import Footer from '../components/Footer'
import AffichageDonneesJSON from '../components/Logement'



export default function Home() {
  return (
    <div className="App">
      <Header/>

      <div id="titre">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <AffichageDonneesJSON/>

      <Footer/>
    </div>
  )
}