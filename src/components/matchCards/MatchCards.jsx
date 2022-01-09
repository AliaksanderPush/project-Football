import React from "react";

import { SingleMatchCard } from "./singleMatchCard/SingleMatchCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { myUseAxios } from "../../redux";
import { VIDEO_MATCHES_LOAD } from "../../redux";

import "./MatchCards.css";

export const MatchCards = () => {
  const dispatch = useDispatch();
  const videoMatches = useSelector(({ footVidReducer }) => {
    return footVidReducer.matches;
  });

  useEffect(() => {
    dispatch(
      myUseAxios({
        url: "https://www.scorebat.com/video-api/v3/",
        types: VIDEO_MATCHES_LOAD,
      })
    );
  }, [dispatch]);

  return (
    <div className="err">
      <div className="cards container">
        {videoMatches &&
          videoMatches.map((item) => {
            return <SingleMatchCard key={item.title} info={item} />;
          })}
      </div>
    </div>
  );
};
