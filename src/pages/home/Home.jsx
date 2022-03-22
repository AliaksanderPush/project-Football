import React, { useEffect } from "react";
import { CardHome } from "../../components/cards/Card";
import Aos from "aos";
import { Info } from "../../resourses/Info";
import './Home.css';
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container home-container">
      <h2 className="text-center home-general">championships</h2>
      <div className="row justify-content-center home-page">
        {Info.map((item, index) => (
          <CardHome
            key={item.id}
            aos={item.aos}
            aos_offset="300"
            liga={item.liga}
            src={item.src}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
