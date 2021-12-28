import React from "react";
import "./resourses/styles.css";
import { Layout } from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, WatchMatches, SingUp, Whoops404 } from "./pages";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/watch_matches" element={<WatchMatches />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="*" element={<Whoops404 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
