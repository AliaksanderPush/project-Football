import React from "react";
import video from "./video.mp4";

export const HeaderVideo = () => {
  return <video className="vid-bg" src={video} autoPlay loop muted></video>;
};
