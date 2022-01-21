import React from "react";
import { useDispatch } from "react-redux";
import { filterChamp } from "../../redux";
import { Btns } from "../../resourses/champs";
import uniqid from "uniqid";
import "./ChooseChamp.css";

export const ChooseChamps = () => {
    const dispath = useDispatch();

  function handleChange(e) {
    dispath(filterChamp(e.target.value));
  }

  return (
    <div className="chooseChamp container">
      <div className="row">
        <div className="col">
          {Btns.map((item, index) => {
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
