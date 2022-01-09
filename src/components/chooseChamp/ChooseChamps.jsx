import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { chooseSelect } from "../../redux";

export const ChooseChamps = () => {
  const texts = ["choose Champ", "La liga", "BLR champ"];
  const [value, setValue] = useState("");
  const dispath = useDispatch();

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleDispath(value) {
    dispath(chooseSelect(value));
  }

  useEffect(() => {
    handleDispath(value);
  }, [value]);

  return (
    <div className="chooseChamp">
      <select value={value} onChange={handleChange}>
        {texts.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
