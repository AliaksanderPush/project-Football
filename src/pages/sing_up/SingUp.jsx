import React, { useEffect } from "react";
import { AuthForm } from "../../components/authForm/AuthForm";
import { useSelector, useDispatch } from "react-redux";
import { ErrorMes } from "../../components";
import { errorOff } from "../../redux/acshions";
import { error } from "../../redux/selectors";
import "./SingUp.css";

const SingUp = () => {
  const err = useSelector(error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (err) {
      setTimeout(() => {
        dispatch(errorOff());
      }, 3000);
    }
  }, [err, dispatch]);

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-sm-12 col-md-6 bandle">
          {err ? <ErrorMes /> : null}
          <AuthForm />
        </div>
        <div className="col-sm-12 col-md-6 auth-page"></div>
      </div>
    </div>
  );
};

export default SingUp;
