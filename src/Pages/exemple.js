import React, { useState, useEffect } from 'react';
import Header from './header';
import '../styles/exemple.css';
import photo1 from '../image/Star Wars setting.jpg';
import photo2 from '../image/4_4 toyota ❤️ désert Tunisie Sud.jpg';
import photo3 from '../image/Douz - Tunisie.jpg';
import photo4 from '../image/The ultimate road trip through South Tunisia.jpg';
import photo5 from '../image/Tozeur (Tunisie) Source naturelle.jpg';
import photo6 from '../image/Tozeur - Tunisie_.jpg';
import photo7 from '../image/Voyage au coeur du desert tunisien _ Excursion désert _ Aux Fourneaux.jpg';

const exemple = () => {
 

  return (

<body>

    {/* <!-- Section En-tête --> */}
    <header class="header-section">
        <h1>Explorez le Sud Tunisien</h1>
        <p>Une aventure à travers les paysages uniques et la culture du désert</p>
        <button class="cta-button">Réservez maintenant</button>
    </header>

    {/* <!-- Barre de Navigation --> */}
    <nav class="navbar">
        <a href="#home">Accueil</a>
        <a href="#destinations">Destinations</a>
        <a href="#experiences">Nos Expériences</a>
        <a href="#testimonials">Témoignages</a>
        <a href="#contact">Contact</a>
    </nav>

    {/* <!-- Section Destinations --> */}
    <section id="destinations" class="destinations">
        <h2>Destinations Populaires</h2>
        <div class="destination-card">
            <img src={photo1} alt="Douz"/>
            <h3>Douz</h3>
            <p>La porte du désert</p>
            <button>En savoir plus</button>
        </div>
        <div class="destination-card">
            <img src={photo2} alt="Tozeur"/>
            <h3>Tozeur</h3>
            <p>Oasis et palmiers</p>
            <button>En savoir plus</button>
        </div>
        {/* <!-- Ajoutez d'autres cartes ici --> */}
    </section>

    {/* <!-- Section Nos Expériences --> */}
    <section id="experiences" class="experiences">
        <h2>Nos Expériences</h2>
        <div class="experience-card">
            <img src={photo3} alt="Balade en dromadaire"/>
            <h3>Balade en Dromadaire</h3>
            <p>Découvrez le désert comme un local.</p>
        </div>
        <div class="experience-card">
            <img src={photo4} alt="Nuit en Bivouac"/>
            <h3>Nuit en Bivouac</h3>
            <p>Profitez de la tranquillité du désert sous les étoiles.</p>
        </div>
    </section>

    {/* <!-- Section Témoignages --> */}
    <section id="testimonials" class="testimonials">
        <h2>Témoignages</h2>
        <div class="testimonial-card">
            <p>"Une expérience inoubliable dans le désert!"</p>
            <h4>- Sarah B.</h4>
        </div>
        <div class="testimonial-card">
            <p>"Le meilleur voyage de ma vie!"</p>
            <h4>- Mohamed L.</h4>
        </div>
    </section>

    {/* <!-- Footer --> */}
    <footer class="footer">
        <p>&copy; 2024 Agence de Voyage - Sud Tunisien</p>
        <p>Suivez-nous : <a href="#">Facebook</a> | <a href="#">Instagram</a></p>
    </footer>

</body>


  );
};

export default exemple;