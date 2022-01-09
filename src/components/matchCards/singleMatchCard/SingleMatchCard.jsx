import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { matchSelection } from "../../../redux";
import "./SingleMatchCard.css";

export const SingleMatchCard = ({ info }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (info) => {
    dispatch(matchSelection(info));
    navigate("/watch_matches/title");
  };

  return (
    <div className="card" onClick={() => handleClick(info)}>
      <p className="title">{info.title}</p>
      <div className="card_img">
        <img src={info.thumbnail} alt={info.title} />
      </div>

      <div className="match_info">
        <p>{info.date}</p>
        <p> {info.competition.name} </p>
      </div>
    </div>
  );
};
