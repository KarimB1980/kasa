import React from 'react'
import { Link } from "react-router-dom";


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