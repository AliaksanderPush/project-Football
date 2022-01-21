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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-6 ">
          <AuthForm /> 
          </div>
          <div className="col-sm-12 col-md-6 auth-page">
          {err ? <Error /> : null}
          </div>
        </div>
      </div>
    
  );
};
