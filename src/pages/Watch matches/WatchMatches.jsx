import React from "react";
import { MatchCards, ChooseChamps } from "../../components";
import { Spinner } from "../../components/UI/Spinner";
import { useSelector } from "react-redux";
import { Error } from "../../components";
import Typography from "@mui/material/Typography";
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
      <div className="wrapper">
        <ChooseChamps />
        <Typography
          m={3}
          className="watchMatches-general"
          variant="h2"
          component="div"
          justify="center"
          align="center"
          sx={{ fontFamily: "Poppins" }}
        >
          <span>T</span>OP MATCHES <span>T</span>ODAY
        </Typography>
        <MatchCards />
      </div>
    </div>
  );
};
