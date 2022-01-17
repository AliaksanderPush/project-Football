import React from "react";
import { useLayoutEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HeaderVideo } from "./HeaderItems/HeaderItemsVideo";
import { HeaderBanner } from "./HeaderItems/HeaderItemsBanner";
import { CustomLink } from "../../service/CustomLink";

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
    if (value !== "/") {
      setHeaderElem(false);
    } else {
      setHeaderElem(true);
    }
  };

  useLayoutEffect(() => {
    let header = headerRef.current;
    handleHideElement(path);
    if (path !== "/") {
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
            <span>F</span>ootball
          </div>
          <div
            className={"toggle" + (active ? " active" : "")}
            onClick={activeCorrectFilter}
          ></div>
          <div className="header-nav">
            <ul className="menu-area">
              <li className="active">
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li className="active">
                <CustomLink to="/watch_matches/">Whatch Matches</CustomLink>
              </li>
              <li className="active">
                <CustomLink to="/singUp/">sing Up</CustomLink>
              </li>
            </ul>
          </div>
        </div>
        {hideHeaderElem ? <HeaderBanner /> : null}

        <div className={"showcase" + (active ? "" : " hide-menu")}>
          <div className="menu">
            <ul>
              <li>
                <CustomLink to="/">Home</CustomLink>
              </li>
              <li>
                <CustomLink to="/watch_matches/">Whatch Matches</CustomLink>
              </li>
              <li>
                <CustomLink to="/singUp/">Sing up</CustomLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
