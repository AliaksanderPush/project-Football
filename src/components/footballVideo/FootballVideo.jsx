import React from "react";
import { Spinner } from "../spinner/Spinner";
import { UseFetch } from "../../service/UseFetch";
import { Error } from "../errorBandle/Error";
import { VideoCard } from "./VideoCard";
import { ElderlyTwoTone } from "@mui/icons-material";

export const FootballVideo = () => {
  const { loading, data, error, refetch } = UseFetch({
    url: "https://www.scorebat.com/video-api/v3/",
  });
  const allArr = data.response;
  console.log(data.response);
  const homearr = [];
  const homeDisplayarr = [];
  allArr.map((el) => homearr.push(el));
  console.log(homearr);

  homearr.filter((el) =>
    filter === e.competition.name
      ? homeDisplayarr.push(ElderlyTwoTone)
      : "Nothing"
  );

  return (
    <div className="err">
      {loading ? <Spinner /> : null}
      {error ? <Error /> : null}
      <button onClick={refetch}>Перезагрузить данные</button>
    </div>
  );
};
