import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <p>{title}</p>
        <p>{price}</p>
      </div>
    </div>
  );
}

export default Card;
