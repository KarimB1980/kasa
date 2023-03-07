import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../pages/Home'
import ErrorPage from '../pages/D_404'
import FicheLogement from '../pages/Fiche-Logement'
import APropos from '../pages/A-Propos'

// Création du router
const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="fichelogement/:logementid" element={<FicheLogement/>} />
      <Route path="apropos" element={<APropos />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;