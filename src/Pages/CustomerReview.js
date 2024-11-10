import React from "react";
import "../styles/CustomerReview.css";
import photo1 from "../image/4.svg";


const customerReviews = [
  { name: "Olivia Smith", title: "Director", stars: 5, image: photo1, color: "#3ba6dd" },
  { name: "Greg Jones", title: "Director", stars: 4, image: photo1, color: "#aecbfa" },
  { name: "Mitch Williams", title: "Artist", stars: 5, image: photo1, color: "#c58a59" },
];
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
const renderStars = (count) => {
  return Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={`star ${i < count ? "filled" : ""}`}>★</span>
  ));
};

const CustomerReview = () => {
  return (
    <div className="review-container">
      {customerReviews.map((testimonial, index) => (
        <div className="review-card" key={index} style={{ borderColor: testimonial.color }}>
          <div className="image-wrapper" style={{ borderColor: testimonial.color }}>
            <img src={testimonial.image} alt={testimonial.name} className="review-image" />
          </div>
          <p className="quote-icon">“</p>
          <p className="review-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Provident molestias voluptatem magnam.
          </p>
          <h3 className="review-name">{testimonial.name}</h3>
          <p className="review-title">{testimonial.title}</p>
          <div className="review-stars">
            {renderStars(testimonial.stars)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomerReview;
