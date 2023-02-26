import React from 'react'
import { Link } from "react-router-dom";

// Création de l'en-tête
export default function Header() {
  return (
    <header>
      <div id="logo">
      </div>
      <nav id="navigation">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </header>
  )
}