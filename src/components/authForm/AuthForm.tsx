import React, { MouseEvent, useEffect, useState } from "react";
import { loginValidate, passwordValidate } from "../validation/Validation";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "../../redux/acshions";
import { rootReducer } from "../../redux/rootReducer";
import "./AuthForm.css";

interface IsignInForm {
  login: string;
  password: string;
}

type AppState = ReturnType<typeof rootReducer>;

export const AuthForm: React.FC = () => {
  const { handleSubmit, control } = useForm<IsignInForm>();
  const { errors } = useFormState({ control });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state): AppState => {
    return state;
  });
  const [user, setUser] = useState({});
  const [value, setValue] = useState({});
  const onSubmit: SubmitHandler<IsignInForm> = (data) => {
    dispatch(getInfo());
    setValue(data);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/singUp/registration");
  };
  console.log("user>>>", user);
  console.log("value>>>", value);
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
    </div>
  );
};
