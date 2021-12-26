import React from "react";
import { Spinner } from "./Spinner";
import { UseFetch } from "../service/UseFetch";

export const VideoMaths = () => {
  const { loading, data, error, refetch } = UseFetch({
    url: "https://www.scorebat.com/video-api/v3/",
  });
  console.log(loading, data, error);
  return (
    <>
      {loading ? <Spinner /> : null}
      <button onClick={refetch}>Перезагрузить данные</button>
    </>
  );
};
