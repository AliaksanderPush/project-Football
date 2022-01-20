import React from "react";
import "./Error.css";

export const Error = () => {
  return (
    <div className="error">
      <span>Ошибка загрузки! Что-то пошло не так (:</span>
    </div>
  );
};
export const ErrorMes = () => {
  return <span className="err">The username or password is incorrect!</span>;
};
export const SoccessMesReg = () => {
  return <span className="soccess">You have successfully registered!</span>;
};
export const SoccessMesAuth = () => {
  return <span className="soccess">Welcome</span>;
};
