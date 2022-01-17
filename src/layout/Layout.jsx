import React from "react";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";
import { Outlet } from "react-router";

export const Layout = ({ children }) => {
  return (
    <div className="all-content">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
