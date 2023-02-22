import { useState } from 'react'
import './Home.css'
import '../Components/Header.css'
import '../Components/Footer.css'
import '../Components/Location.css'

import Header from '../Components/header';
import Footer from '../Components/Footer'
import AffichageDonnesJSON from '../Components/Location'



export default function Home() {
  return (
    <div className="App">
      <Header/>

      <div id="titre">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <AffichageDonnesJSON/>

      <Footer/>
    </div>
  )
}