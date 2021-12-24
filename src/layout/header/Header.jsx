import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import video from "./video.mp4";

export const Header = () => {
  const [active, setActive] = useState(false);

  const activeCorrectFilter = () => {
    setActive(!active);
  };

  return (
    <>
      <section className={"showcase" + (active ? " active" : "")}>
        <header>
          <h2 className="logo">FOOTBALL</h2>
          <div
            className={"toggle" + (active ? " active" : "")}
            onClick={activeCorrectFilter}
          ></div>
        </header>
        <video src={video} type="video/mp4" muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Never Stop To </h2>
          <h3>Exploring The World</h3>
          <p>
            Lorem ipsum dolor sit Linkmet, consectetur Linkdipisicing elit, sed
            do eiusmod tempor incididunt ut lLinkbore et dolore mLinkgnLink
            LinkliquLink. Ut enim Linkd minim veniLinkm, quis nostrud
            exercitLinktion ullLinkmco lLinkboris nisi ut Linkliquip ex eLink
            commodo consequLinkt.
          </p>
          <Link to="/">Explore</Link>
        </div>
        <ul className="social">
          <li>
            <Link to="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" alt="img1" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" alt="img2" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" alt="img3" />
            </Link>
          </li>
        </ul>
      </section>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/singin">Sing in</Link>
          </li>
          <li>
            <Link to="/singup">Sing up</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
