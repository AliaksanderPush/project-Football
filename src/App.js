import React from "react";
import "./resourses/styles.css";
import { Layout } from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, WatchMatches, SingUp, Whoops404 } from "./pages";
import { MatchLive, RegistrationForm } from "./components";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="watch_matches" element={<WatchMatches />} />
          <Route path="watch_matches/:title" element={<MatchLive />} />
          <Route path="singUp" element={<SingUp />} />
          <Route path="singUp/:registration" element={<RegistrationForm />} />
          <Route path="*" element={<Whoops404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
