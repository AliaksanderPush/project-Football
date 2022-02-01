import React, { useEffect } from "react";
import { useLayoutEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { HeaderVideo } from "./HeaderItems/HeaderItemsVideo";
import { HeaderBanner } from "./HeaderItems/HeaderItemsBanner";
import { CustomLink } from "../../service/CustomLink";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useSelector } from "react-redux";
import { userEnter } from "../../redux/selectors";
import { MenuListComposition } from "./menuItem/MenuItem";
import "./Header.css";

export const Header = () => {
  const headerRef = useRef();
  const auth = useSelector(userEnter);
  const location = useLocation();

  const path = location.pathname;

  const [active, setActive] = useState(false);
  const [hideHeaderElem, setHeaderElem] = useState(false);
  const [userAuth, setUserAuth] = useState({
    userName: "Sasha",
    isActivated: true,
  });
  const { userName, isActivated } = userAuth;

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

  useEffect(() => {
    setUserAuth(auth);
  }, [auth]);

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
                <CustomLink to="/singUp/login">sing Up</CustomLink>
              </li>
              <li className="user-ented">
                {isActivated ? (
                  <MenuListComposition userName={userName} />
                ) : (
                  <PersonOutlineOutlinedIcon />
                )}{" "}
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
                <CustomLink to="/singUp/login">Sing up</CustomLink>
              </li>
              <li>
                {!!userName ? userName : null}{" "}
                {isActivated ? (
                  <MenuListComposition userName={userName} />
                ) : (
                  <PersonOutlineOutlinedIcon />
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
