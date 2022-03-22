import React, { useEffect, Suspense, lazy } from "react";
import "./resourses/styles.css";
import { Layout } from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import { RegistrationForm } from "./components";
import { useDispatch } from "react-redux";
import { checkUser } from "./redux/acshions";
import { Spinner } from "./components/UI/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./pages/home/Home"));
const WatchMatches = lazy(() => import("./pages/WatchMatches/WatchMatches"));
const SingUp = lazy(() => import("./pages/sing_up/SingUp"));
const Whoops404 = lazy(() => import("./pages/page 404/Whoops404"));
const MatchLive = lazy(() => import("./components/MatchLive/MatchLive"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkUser());
    }
  }, [dispatch]);
  return (
    <>
      <Suspense
        fallback={
          <div className="centered">
            <Spinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="watch_matches" element={<WatchMatches />} />
            <Route path="watch_matches/:title" element={<MatchLive />} />
            <Route path="singUp/login" element={<SingUp />} />
            <Route path="singUp/registration" element={<RegistrationForm />} />
            <Route path="*" element={<Whoops404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
