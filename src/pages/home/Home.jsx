import React, { useEffect } from "react";
import { CardHome } from "../../components/cards/Card";
import Aos from "aos";
import { Info } from "../../resourses/Info";

import "./Home.css";
import "aos/dist/aos.css";
export const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home-page">
      {Info.map((item, index) => (
        <CardHome
          aos={item.aos}
          aos_offset="100"
          liga={item.liga}
          src={item.src}
        />
      ))}
    </div>
  );
};
