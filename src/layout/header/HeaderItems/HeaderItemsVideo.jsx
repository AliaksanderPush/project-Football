import React from "react";

export const HeaderVideo = () => {
  return (
    <video
      className="vid-bg"
      src="/video/video.mp4"
      autoPlay
      loop
      muted
    ></video>
  );
};
