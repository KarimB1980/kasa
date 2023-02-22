import React from 'react'

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img src="../../public/Logo/K.svg" className="Klogo" alt="K logo" />
        <div id="logodeux">
          <img src="../../public/Logo/Logo.png" className="Logologo" alt="Logo logo" />
          <img src="../../public/Logo/s.svg" className="Slogo" alt="S logo" />
          <img src="../../public/Logo/a.svg" className="Alogo" alt="A logo" />
        </div>
      </div>
      <nav id="navigation">
        <a href="/">
          Accueil
        </a>
        <a href="/apropos">
          A Propos
        </a>
      </nav>
    </header>
  )
}