import React, { useState } from "react";
import {
  loginValidate,
  passwordValidate,
  emailValidate,
} from "../validation/Validation";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller, useFormState } from "react-hook-form";
import { SendServer } from "../../redux/acshionsServer/SendServer";
import { useDispatch } from "react-redux";
import { userEnter } from "../../redux/acshions";
import { useNavigate } from "react-router";
import { SoccessMesReg } from "../errorBandle/Error";
import "./RegistrationForm.css";

export const RegistrationForm = () => {
  const { handleSubmit, control } = useForm();
  const [mess, setMess] = useState(false);
  const { errors } = useFormState({ control });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    SendServer(data);
    setMess(!mess);
    dispatch(userEnter(data, true));
    setTimeout(() => {
      navigate("/watch_matches");
    }, 2000);
  };

  return (
    <div className="registration-form">
      <Typography variant="h4" component="div" gutterBottom={true}>
        Enter
      </Typography>
      <form className="form-sub" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="loginReg"
          rules={loginValidate}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text1"
              name="loginReg"
              label="Login"
              size="small"
              margin="normal"
              className="registration-form-input"
              fullWidth
              variant="outlined"
              error={!!errors.loginReg?.message}
              helperText={errors.loginReg?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          rules={emailValidate}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text2"
              name="email"
              label="email"
              size="small"
              margin="normal"
              className="registration-form-input"
              fullWidth
              variant="outlined"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="passwordReg"
          rules={passwordValidate}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text3"
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
        {!!mess ? (
          <Typography
            variant="h6"
            component="div"
            className="registration-mess"
            sx={{ color: "green" }}
          >
            <SoccessMesReg />
          </Typography>
        ) : null}
      </form>
    </div>
  );
};
