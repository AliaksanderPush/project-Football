import React from "react";
import { Spinner } from "../spinner/Spinner";
import { UseFetch } from "../../service/UseFetch";
import { Error } from "../errorBandle/Error";
import { VideoCard } from "./VideoCard/VideoCard";
import "./FootballVideo.css";

export const FootballVideo = () => {
  const { loading, data, error, refetch } = UseFetch({
    url: "https://www.scorebat.com/video-api/v3/",
  });

  if (!data) return null;
  return (
    <div className="err">
      {loading ? <Spinner /> : null}
      {error ? <Error /> : null}
      <button onClick={refetch}>Перезагрузить данные</button>

      <div className="cards container">
        {data.response.map((item) => {
          return <VideoCard key={item.title} info={item} />;
        })}
      </div>
    </div>
  );
};
