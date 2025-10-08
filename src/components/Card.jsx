import { Star } from "lucide-react";
import React from "react";

const Card = ({ title, description, imageUrl, rating }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-overlay">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="rating">
          {Array.from({ length: Math.floor(rating) }, (_, i) => (
            <Star key={i} className="star" fill="#cdb876" />
          ))}
          {Array.from({ length: 5 - Math.floor(rating) }, (_, i) => (
            <Star key={i} className="star" />
          ))}
          <span className="rating-value">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
