import React from "react";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useSelector } from "react-redux";
import { Error } from "../../components";
import "./SingUp.css";

export const SingUp = () => {
  const err = useSelector((state) => {
    const { AppReducer } = state;
    return AppReducer.error;
  });
  return (
    <div className="auth-page">
      {err ? <Error /> : null}
      <AuthForm />
    </div>
  );
};
