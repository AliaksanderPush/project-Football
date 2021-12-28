import React from "react";
import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import "./MatchLive.css";

export const MathLive = () => {
  const info = useStoreState((state) => state.LiveInfo);
  const emb = info.embed.slice(137, 228);
  const history = useNavigate();

  const icon = "<<";

  return (
    <div className="video_page">
      <p className="video_info">
        {" "}
        <span onClick={() => history.push("/")}>{icon} Back</span> {info.title}{" "}
      </p>
      <p className="name">{info.competition.name} </p>
      <div className="frm">
        <iframe title="the_video" className="frame" src={emb}></iframe>
      </div>
    </div>
  );
};
