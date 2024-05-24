import React from 'react';
import { Button, TextField, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { useFormik } from "formik";
import LoginService from "../../Service/AuthService";
import { defaultInstance } from "../../Service/Api";

const validate = (values: { email: string }) => {
  const errors: { email?: string } = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); 

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      LoginService(defaultInstance)
        .login(values)
        .then((response: { data: { accessToken: string } }) => {
          console.log("response", response);
          localStorage.setItem("token", "Bearer " + response.data.accessToken);
          navigate("/car");
        })
        .catch((e) => {
          console.error(e.response.data);
        });
    },
  });

  return (
    <Grid container justifyContent="center">
      <Paper elevation={3} style={{ padding: '2em', marginTop: '2em' }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default LoginPage;