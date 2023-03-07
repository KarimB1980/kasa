import React from 'react'
import { NavLink } from "react-router-dom"

// Création de l'en-tête
export default function Header() {
  return (
    <header>
      <div id="logo">
      </div>
      <nav id="navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : 'inactive'}>Accueil</NavLink>
        <NavLink to="/apropos" className={({ isActive }) => isActive ? 'active' : 'inactive'}>A Propos</NavLink>
      </nav>
    </header>
  )
}