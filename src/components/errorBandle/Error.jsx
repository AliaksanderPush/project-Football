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
  return (
    <div className="err ">
      <p>The username or password </p>
      <p>is incorrect!</p>
      <p>Create your account</p>
    </div>
  );
};
export const SoccessMesReg = () => {
  return <span className="soccess">You have successfully registered!</span>;
};
export const SoccessMesAuth = () => {
  return <span className="soccess">Welcome</span>;
};
export const incorectLoginMess = () => {
  return "The username or password is incorrect!";
};
