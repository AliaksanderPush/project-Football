import React from "react";
import "./resourses/styles.css";
import { Layout } from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, WatchMatches, SingUp, Whoops404 } from "./pages";
import { MathLive } from "./components/MatchLive/MathLive";
import { StoreProvider } from "easy-peasy";
import { stor } from "./store/stor";

function App() {
  return (
    <StoreProvider store={stor}>
      <>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/watch_matches/:card" element={<WatchMatches />} />
            <Route path="/singUp" element={<SingUp />} />
            <Route path="/live" component={<MathLive />} />
            <Route path="*" element={<Whoops404 />} />
          </Routes>
        </Layout>
      </>
    </StoreProvider>
  );
}

export default App;
