import React, { useState } from "react";

import { SingleMatchCard } from "./singleMatchCard/SingleMatchCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { myUseAxios } from "../../redux";
import { VIDEO_MATCHES_LOAD } from "../../redux";

export const MatchCards = () => {
  const [filter, setFilter] = useState("");
  const dispatch = useDispatch();
  const videoMatches = useSelector(({ footVidReducer }) => {
    return footVidReducer.matches;
  });

  const filterMatches = useSelector(({ chooseChampReducer }) => {
    return chooseChampReducer.index;
  });

  const handleFilter = () => {
    if (filter) {
      return videoMatches.filter((item) => item.competition === filter);
    } else {
      return videoMatches;
    }
  };

  const matchsFilter = handleFilter();

  useEffect(() => {
    setFilter(filterMatches);
  }, [filterMatches]);

  useEffect(() => {
    dispatch(
      myUseAxios({
        url: "https://www.scorebat.com/video-api/v3/",
        types: VIDEO_MATCHES_LOAD,
      })
    );
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
        {!!matchsFilter.length &&
          matchsFilter.map((item) => {
            return <SingleMatchCard key={item.title} info={item} />;
          })}
      </div>
    </div>
  );
};
