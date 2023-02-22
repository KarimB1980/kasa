import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/Home'
import ErrorPage from './routes/D_404'
import FicheLogement from './routes/Fiche-Logement'
import APropos from './routes/A-Propos'



import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fichelogement",
    element: <FicheLogement />,
  },
  {
    path: "/apropos",
    element: <APropos />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);