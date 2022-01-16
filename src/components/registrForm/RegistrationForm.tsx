import React from "react";
import {
  loginValidate,
  passwordValidate,
  emailValidate,
} from "../validation/Validation";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { SendServer } from "../../server/SendServer";
import "./RegistrationForm.css";

interface IsigupInForm {
  loginReg: string;
  password: string;
  email: string;
}

export const RegistrationForm: React.FC = () => {
  const { handleSubmit, control } = useForm<IsigupInForm>();
  const { errors } = useFormState({ control });
  const onSubmit: SubmitHandler<IsigupInForm> = (data) => {
    SendServer(data);
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
          name="password"
          rules={passwordValidate}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              id="outlined-error-helper-text3"
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
    </div>
  );
};
