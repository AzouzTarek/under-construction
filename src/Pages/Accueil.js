import React, { useState, useEffect } from 'react';
import Header from './header';
import '../styles/Accueil.css';
import photo1 from '../image/1.jpg';
import photo2 from '../image/4_4 toyota ❤️ désert Tunisie Sud.jpg';
import photo3 from '../image/3.jpg';
import photo4 from '../image/2.jpg';
import photo5 from '../image/Douz - Tunisie.jpg';
import photo6 from '../image/Star Wars setting.jpg';
import photo7 from '../image/The ultimate road trip through South Tunisia.jpg';

import Carousel from './Carousel';
import CustomerReview from './CustomerReview';

const Accueil = () => {
  const [showContent, setShowContent] = useState(false);  // Contrôle de l'affichage du contenu
  const [currentImage, setCurrentImage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);  // Gestion de l'animation de l'image

  const images = [photo2, photo3, photo4, photo5, photo6, photo7];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);  // Afficher le contenu après 2 secondes
    }, 2000); // Délai de 2 secondes

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);  // Active la transparence de l'image actuelle avant de changer
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length); // Change l'image après l'animation
        setFadeOut(false);  // Réinitialise la transparence après le changement d'image
      }, 500);  // Délai pour que l'animation de transparence soit complète avant de changer l'image
    }, 4000);  // Intervalle de 4 secondes entre les changements d'images

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
     
      <Header />
      <div id="container">

        {showContent && (
          <div id="content" className="fadeInContent">
            <div className="contentWrapper">
              <div className="imageBeforeText">
                <img src={images[currentImage]} alt="Desert" className={`imageBefore ${fadeOut ? 'fadeOut' : ''}`} />
              </div>
              <div className="textContent">
                <h1>Au Coeur du désert</h1>
                <p>
                  Agence de voyage France-Tunisienne est à votre écoute et à votre disposition pour tous vos désirs d'évasion dans le sud Tunisien.
                  Nous sommes spécialistes du désert, soit en randonnées bivouac 4x4, quad méharées, circuits classiques, villages berbères, oasis de montagne, circuits à la carte... (cotation sous 48 heures).
                  Contactez-nous directement par notre email, notre site internet, notre fax ; une équipe franco-tunisienne toujours disponible.
                  Nous organisons des voyages de grands groupes, moyens ou familiaux. Nous sommes heureux de faire découvrir notre passion pour le sud Tunisien et le Sahara.
                  Venez partager cette merveilleuse aventure avec nous !
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <hr />
      <Carousel />
      <hr/>
      <CustomerReview/>
     
    </div>
  );
};

export default Accueil;
