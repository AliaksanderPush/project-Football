import React from "react";
import { useLayoutEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HeaderVideo } from "./HeaderItems/HeaderItemsVideo";
import { HeaderBanner } from "./HeaderItems/HeaderItemsBanner";

import "./Header.css";

export const Header = () => {
  const headerRef = useRef();

  const location = useLocation();
  const path = location.pathname;

  const [active, setActive] = useState(false);
  const [hideHeaderElem, setHeaderElem] = useState(false);

  const activeCorrectFilter = () => {
    setActive(!active);
  };

  const handleHideElement = (value) => {
    if (value === "/singIn/" || value === "/singUp/") {
      setHeaderElem(false);
    } else {
      setHeaderElem(true);
    }
  };

  useLayoutEffect(() => {
    let header = headerRef.current;
    handleHideElement(path);
    if (path === "/singIn/" || path === "/singUp/") {
      header.style.height = "60px";
    } else {
      header.style.height = "100vh";
    }
  }, [path]);

  return (
    <>
      <header className="fix" ref={headerRef}>
        {hideHeaderElem ? <HeaderVideo /> : null}
        <div className="nav-area">
          <div className="logo">
            <span>S</span>afron
          </div>
          <div
            className={"toggle" + (active ? " active" : "")}
            onClick={activeCorrectFilter}
          ></div>
          <div className="nav">
            <ul className="menu-area">
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li className="active">
                <Link to="/singIn/">sing In</Link>
              </li>
              <li className="active">
                <Link to="/singUp/">sing Up</Link>
              </li>
            </ul>
          </div>
        </div>
        {hideHeaderElem ? <HeaderBanner /> : null}

        <div className={"showcase" + (active ? "" : " hide-menu")}>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/singIn/">Sing in</Link>
              </li>
              <li>
                <Link to="/singUp/">Sing up</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
