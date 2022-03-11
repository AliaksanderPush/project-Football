import React from "react";
import { useNavigate } from "react-router";

export const HeaderBanner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/watch_matches");
  };
  return (
    <>
      <div className="header-text">
        <h2>
          Watch <span>FOOTBALL</span>
        </h2>
        <p>Build Premium</p>
        <button className="header-button" onClick={handleClick}>
          Watch
        </button>
        <ul className="social">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="img1" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="img2" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="img3" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
