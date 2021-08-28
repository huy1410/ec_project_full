import { Link as RouterLink ,Redirect} from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import * as Yup from 'yup';
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import {login} from '../features/auth/authSlice'
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const error = useSelector((state) => state.auth.error);
  const isLoading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);
  console.log(token);
  const validationSchema = Yup.object().shape({
    
    username: Yup.string()
      .required('UserName is required'),
      // .email('Email is invalid'),
      // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
   
  });
  const {
    register,
handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  const dispatch = useDispatch();
  
 
  const onSubmitHandle = ({username,password}) => {
    dispatch(login({username,password}));
    // localStorage.setItem("token", token);
  } 
  if (token) return <Redirect to="/dasboard" />;
  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <form  onSubmit={handleSubmit(onSubmitHandle)} >
            <Box sx={{ mb: 3 }}>
              <Typography color="textPrimary" variant="h2">
                Sign in
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Sign in on the internal platform
              </Typography>
              {error && <Alert severity="error">{error}</Alert>}
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}></Grid>
              <Grid item xs={12} md={6}></Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3,
              }}
            ></Box>
            <TextField
              fullWidth
              label="UserName"
              margin="normal"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            
              variant="outlined"
              {...register("username")}
              error={Boolean(errors.username)}
              helperText={errors.username?.message}
            />
            {/* <p>{errors.email?.message}</p> */}
            <TextField
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              {...register("password")}
              error={Boolean(errors.password)}
            helperText={errors.password?.message}
        />
         {/* <p>{errors.password?.message}</p> */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
             {isLoading ? <CircularProgress /> : "Sign in"}
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body1">
              Don&apos;t have an account?{" "}
              <Link component={RouterLink} to="/register" variant="h6">
                Sign up
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
