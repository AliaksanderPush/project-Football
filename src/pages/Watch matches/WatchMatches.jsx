import React from "react";
import { MatchCards, ChooseChamps } from "../../components";
import { Spinner } from "../../components/UI/Spinner";
import { useSelector } from "react-redux";
import { Error } from "../../components";

import "./WatchMatches.css";

export const WatchMatches = () => {
  const err = useSelector((state) => {
    const { AppReducer } = state;
    return AppReducer.error;
  });

  return (
    <div className="watchMatches">
      {err ? <Error /> : null}
      <Spinner />
      <ChooseChamps />
      <MatchCards />
    </div>
  );
};
