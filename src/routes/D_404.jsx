import { useRouteError } from "react-router-dom";
import './D_404.css'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe.</h2>
      <h3>Retourner sur la page d'accueil</h3>
    </div>
  );
}
