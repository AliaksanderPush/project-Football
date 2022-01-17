import React from "react";
import "./Card.css";

export const CardHome = ({ liga, aos, src, aos_offset }) => {
  return (
    
    <div className="col-xs-12 col-md-4 col-lg-4 card-home" data-aos={aos} data-aos-offset={aos_offset}>
      <div className="card-home-item text-center">
        <img alt={liga} src={src} />
      </div>
      <div className="card-home-text">{liga}</div>
    </div>
   
  );
};
