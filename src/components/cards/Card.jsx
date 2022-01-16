import React from "react";
import "./Card.css";

export const CardHome = ({ liga, aos, src, aos_offset }) => {
  return (
    <div className="card-home" data-aos={aos} data-aos-offset={aos_offset}>
      <div className="card-home-item">
        <img alt={liga} src={src} />
      </div>
      <div className="card-home-text">{liga}</div>
    </div>
  );
};
