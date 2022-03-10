import React from "react";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMes } from "../../components";
import { errorOff } from "../../redux/acshions";
import { error } from "../../redux/selectors";
import "./SingUp.css";

export const SingUp = () => {
  const err = useSelector(error);
  const dispatch = useDispatch();
  function onErrMessage() {
    <ErrorMes />;
    dispatch(errorOff());
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-6 ">
          <AuthForm />
        </div>
        <div className="col-sm-12 col-md-6 auth-page">
          {err ? onErrMessage() : null}
        </div>
      </div>
    </div>
  );
};
