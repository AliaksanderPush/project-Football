import React from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import "./VideoCard.css";

export const VideoCard = ({ info }) => {
  //const addInfo = useStoreActions((actions) => actions.addInfo);
  //const open = useNavigate();
  /*
  function openLive() {
    addInfo(info);
    console.log(info);
    open.push("/live");
  }
  onClick={() => {
    openLive();
  }}
*/

  return (
    <Link to={`/watch_matches/${info}`}>
      <div className="card">
        <p className="title">{info.title}</p>
        <div className="card_img">
          <img src={info.thumbnail} alt={info.title} />
        </div>

        <div className="match_info">
          <p>{info.date}</p>
          <p> {info.competition.name} </p>
        </div>
      </div>
    </Link>
  );
};
