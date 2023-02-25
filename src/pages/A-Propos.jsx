import React from 'react';
import './A-Propos.css'
import '../components/Header.css'
import '../components/Footer.css'
import '../components/Fiabilite.css'
import '../components/Respect.css'
import '../components/Service.css'
import '../components/Securite.css'

import Header from '../components/Header';
import Footer from '../components/Footer'
import Fiabilite from '../components/Fiabilite';
import Respect from '../components/Respect';
import Service from '../components/Service';
import Securite from '../components/Securite';

export default function APropos() {
  return (
    <div className="APropos">
      <Header/>
      <div id="photoAPropos">
      </div>
      <div id="contenuAPropos">
        <Fiabilite/>
        <Respect/>
        <Service/>
        <Securite/>
      </div>
      <Footer/>
    </div>
  )
}