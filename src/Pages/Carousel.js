import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from '../image/1.jpg';
import image2 from '../image/2.jpg';
import image3 from '../image/3.jpg';

const carouselData = [
  {
    title: 'LA RICHESSE DE L’ATLAS',
    description: 'Voyage dans le Far West, les sources, les canyons, les oasis et les villages de montagnes.',
    image: image1,
  },
  {
    title: 'DEMI JOURNÉE LE LÉZARD ROUGE',
    description: 'Voyage dans les gorges de Sélja à bord du train Beylical "lézard rouge".',
    image: image2,
  },
  {
    title: 'UNE NUIT AU CAMPEMENT',
    description: 'Une nuit sous tente au campement est une expérience immersive au cœur du Sahara.',
    image: image3,
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  };

  return (
    <div id="carousel-background">
      <div id="carousel-container">
        <h1>Discover Our Experiences</h1>
        <Slider {...settings} id="carousel-slider">
          {carouselData.map((item, index) => (
            <div key={index} id={`carousel-item-${index}`} className="carousel-item">
              <img src={item.image} alt={item.title} className="carousel-image" />
              <div className="carousel-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
