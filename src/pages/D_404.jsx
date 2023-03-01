import React from 'react';
//import { useRouteError } from "react-router-dom";
import './D_404.css'
import '../components/Header.css'
import '../components/Footer.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

// Création de la page d'erreur
export default function ErrorPage() {
  //const error = useRouteError();
  //console.error(error);

  return (
    <div id="page-erreur-404">
      <Header/>
      <div id="principal">
        <h1>404</h1>
        <h2>
          Oups! La page que 
          vous demandez n'existe pas.
        </h2>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer/>
    </div>
  );
}