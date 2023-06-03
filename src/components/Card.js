import React, { useState, useEffect } from "react";
import "./card.css";

export default function Card(props) {
  /// If card is clicked and clicked is false, set clicked to true and return true
  /// If card is clicked and clicked is true, return false

  const handleClick = () => {
    props.cardClicked(props.id);
    props.randomOrderMix();
  };

  return (
    <div className="card" onClick={handleClick}>
      <div className="image-wrapper">
        <img src={props.image} alt="" className="card-image" />
        <img src={props.image} alt="" className="card-image-background" />
      </div>
      <div className="card-separator-line"></div>
      <div className="card-title">{props.title}</div>
    </div>
  );
}
