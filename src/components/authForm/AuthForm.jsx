import React, { useEffect, useState } from "react";
import { loginValidate, passwordValidate } from "../validation/Validation";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller, useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../redux/acshions";
import { SoccessMesAuth, ErrorMes } from "../";
import { usersAuth } from "../../redux/selectors";

import "./AuthForm.css";

export const AuthForm = () => {
  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(usersAuth);
  const [user, setUser] = useState({});
  const [value, setValue] = useState({});
  const [message, setMessage] = useState(false);
  const [typeMess, setTypeMess] = useState(false);

  const onSubmit = (data) => {
    dispatch(getInfo());
    setValue(data);
    checkUser();
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/singUp/registration");
  };

  const checkUser = () => {
    console.log("user>>", user);
    console.log("value>>", value);

    const { login, password } = value;
    const { loginReg, passwordReg } = user;
    if (user && value) {
      if (login === loginReg && password === passwordReg) {
        setTypeMess(true);
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 5000);
      } else {
        setTypeMess(false);
        setMessage(true);
        setTimeout(() => {
          setMessage(false);
        }, 5000);
      }
    }
  };

  useEffect(() => {
    setUser(users);
  }, [users]);

  return (
    <div className="auth-form">
      <Typography variant="h4" component="div" gutterBottom={true}>
        Enter
      </Typography>
      <form className="form-sub" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          rules={loginValidate}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text"
              name="login"
              label="Login"
              size="small"
              margin="normal"
              className="auth-form-input"
              fullWidth
              variant="outlined"
              error={!!errors.login?.message}
              helperText={errors.login?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={passwordValidate}
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text"
              name="password"
              label="password"
              size="small"
              margin="normal"
              className="auth-form-input"
              fullWidth
              variant="outlined"
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          fullWidth={true}
          sx={{
            bgcolor: "#f5bb00",
          }}
        >
          Send
        </Button>
      </form>
      <div className="auth-form__footer">
        <Link
          onClick={(e) => handleClick(e)}
          variant="subtitle1"
          component="span"
          sx={{ color: "blue", cursor: "pointer" }}
        >
          Create your account
        </Link>
      </div>
      {!!message ? (
        <Typography variant="h6" component="span">
          {!typeMess ? <ErrorMes /> : <SoccessMesAuth />}
        </Typography>
      ) : null}
    </div>
  );
};
