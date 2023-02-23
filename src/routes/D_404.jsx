import { useRouteError } from "react-router-dom";
import './D_404.css'
import '../Components/Header.css'
import '../Components/Footer.css'

import Header from '../Components/header';
import Footer from '../Components/Footer'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="page-erreur-404">
      <Header/>
      <div id="principal">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe.</h2>
        <a href="/" id="retour">Retourner sur la page d'accueil</a>
      </div>
      <Footer/>
    </div>
  );
}
