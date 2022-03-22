import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./MatchLive.css";

 const MatchLive = (props) => {
  const navigate = useNavigate();
  const match = useSelector((state) => {
    const { matchLiveReducer } = state;
    return matchLiveReducer.match;
  });

  const goBack = () => navigate(-1);

  const icon = "<<";
  return (
    <div className="video_page">
      <p className="video_info">
        {" "}
        <span onClick={goBack}>{icon} Back</span> {match.title}{" "}
      </p>
      <p className="name">{match.competition.name} </p>
      <div className="frm">
        <iframe
          title="the_video"
          className="frame"
          src={match.matchviewUrl}
        ></iframe>
      </div>
    </div>
  );
};
export default MatchLive;