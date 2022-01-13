import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useForm, Controller } from "react-hook-form";
import "./AuthForm.css";

export const AuthForm = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="auth-form">
      <Typography variant="h4" component="div" gutterBottom={true}>
        Enter
      </Typography>
      <form className="form-sub" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="login"
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              name="login"
              label="Login"
              size="small"
              margin="normal"
              className="auth-form-input"
              fullWidth
              variant="outlined"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              id="outlined-basic"
              name="password"
              label="password"
              size="small"
              margin="normal"
              className="auth-form-input"
              fullWidth
              variant="outlined"
              onChange={(e) => field.onChange(e)}
              value={field.value}
            />
          )}
        />
        <Button
          variant="contained"
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
