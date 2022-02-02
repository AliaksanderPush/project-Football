import React from "react";
import { emailValidate, passwordValidate } from "../validation/Validation";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller, useFormState } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/acshions";

import "./AuthForm.css";

export const AuthForm = () => {
  const { handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const users = useSelector(usersAuth);
  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(login(email, password));
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/singUp/registration");
  };

  return (
    <div className="auth-form">
      <Typography variant="h4" component="div" gutterBottom={true}>
        Enter
      </Typography>
      <form className="form-sub" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="email"
          rules={emailValidate}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text"
              name="email"
              label="email"
              size="small"
              margin="normal"
              className="auth-form-input"
              fullWidth
              variant="outlined"
              error={!!errors.email?.message}
              helperText={errors.email?.message}
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
    </div>
  );
};
