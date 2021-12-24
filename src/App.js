import React from "react";
import { Layout } from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { Home, SingIn, SingUp } from "./pages";

//import "./resourses/styles.css";

function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/singIn" component={SingIn} />
        <Route path="/singUp" component={SingUp} />
      </Routes>
    </div>
  );
}

export default App;
