import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const OffLineChamp = () => {
  return (
    <div>
      {/* Si Hors ligne dire qu'on est en hors ligne et affichier un lien to favorites */}
      <p>Vous êtes en Hors Ligne. Veuillez vérifier votre connexion.</p>
      <Router>
        <div align='left'>
          {/* Affiche un lien pour redirigé vers /favorites */}
          <Link to={'/favorites'}>Favorites</Link>
        </div>
      </Router>
    </div>
  )
}

export default OffLineChamp
