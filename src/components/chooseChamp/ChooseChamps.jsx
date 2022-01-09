import React from "react";
import { useState } from "react";

export const ChooseChamps = () => {
  const texts = ["choose Champ", "La liga", "BLR champ"];
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }
  console.log(value);
  return (
    <div>
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
