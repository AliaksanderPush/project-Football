import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterChamp } from "../../redux";

export const ChooseChamps = () => {
  const btns = [
    "ENGLAND: Premier League",
    "ENGLAND: League Cup",
    "ENGLAND: FA Cup",
    "SPAIN: La Liga",
    "SPAIN: National cup",
    "SPAIN: La Liga2",
    "FRANCE: National cup",
    "FRANCE: Ligue 1",
    "ITALY: Serie A",
    "GERMANY: Bundesliga",
    "PORTUGAL: Liga Portugal",
    "MEXICO: Liga de Expansion, Clausura",
    "MEXICO: Clausura",
    "MEXICO: Clausura",
    "AFRICA NATIONS CUP: Group A",
    "INDIA: ISL",
    "QATAR: Stars League",
  ];

  //const [value, setValue] = useState("");

  const dispath = useDispatch();

  function handleChange(e) {
    dispath(filterChamp(e.target.value));
  }

  return (
    <div className="chooseChamp">
      {btns.map((item, index) => {
        return (
          <input
            onClick={handleChange}
            type="button"
            value={item}
            style={{ margin: "5px" }}
            key={index}
          />
        );
      })}
    </div>
  );
};
