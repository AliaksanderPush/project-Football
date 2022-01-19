import React from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router";

export const Layout = ({ children }) => {
  return (
    <div className="content-all">
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
