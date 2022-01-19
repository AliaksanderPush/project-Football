import React from "react";
import { useDispatch } from "react-redux";
import { filterChamp } from "../../redux";
import uniqid from "uniqid";
import "./ChooseChamp.css";

export const ChooseChamps = () => {
  const btns = [
    { id: uniqid(), liga: "ENGLAND: Premier League" },
    { id: uniqid(), liga: "ENGLAND: League Cup" },
    { id: uniqid(), liga: "ENGLAND: FA Cup" },
    { id: uniqid(), liga: "SPAIN: La Liga" },
    { id: uniqid(), liga: "SPAIN: National cup" },
    { id: uniqid(), liga: "SPAIN: La Liga2" },
    { id: uniqid(), liga: "FRANCE: National cup" },
    { id: uniqid(), liga: "FRANCE: Ligue 1" },
    { id: uniqid(), liga: "ITALY: Serie A" },
    { id: uniqid(), liga: "GERMANY: Bundesliga" },
    { id: uniqid(), liga: "PORTUGAL: Liga Portugal" },
    { id: uniqid(), liga: "MEXICO: Clausura" },
    { id: uniqid(), liga: "MEXICO: Clausura" },
    { id: uniqid(), liga: "AFRICA NATIONS CUP: Group A" },
    { id: uniqid(), liga: "INDIA: ISL" },
    { id: uniqid(), liga: "QATAR: Stars League" },
    { id: uniqid(), liga: "MEXICO: Liga de Expansion, Clausura" },
  ];

  const dispath = useDispatch();

  function handleChange(e) {
    dispath(filterChamp(e.target.value));
  }

  return (
    <div className="chooseChamp container">
      <div className="row">
        <div className="col">
          {btns.map((item, index) => {
            return (
              <div className="form_radio_btn" key={item.id}>
                <input
                  id={"radio-" + index}
                  type="radio"
                  name="radio"
                  value={item.liga}
                  onClick={handleChange}
                />
                <label htmlFor={"radio-" + index}>{item.liga}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
