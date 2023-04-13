import React from "react";
import {login} from "../utils";
import {Box, Button, Link, TextField, ThemeProvider, Typography} from "@mui/material";
import theme from "../constants";
import LandingPage from "../LandingPage/LandingPage";

interface LoginForm {
  username: string,
  password: string
}

class LoginForm extends React.Component {
  onLoginClick = (data: LoginForm) => {
    login(data)
      .then(() => {
        // this.props.onSuccess();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.setState({
          loading: false
        });
      });
  };

  render = () => {
    return (
      <Box sx={{display: "inline-flex", height: "100vh", width: "100%"}}>
        <ThemeProvider theme={theme}>
          <Box sx={{bgcolor: "primary.main", height: "100vh", width: "50%"}}>
            <LandingPage />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "50%"}}>
            <Box>
              <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start"}}>
                <Typography variant="h5" fontWeight="bold" color="primary.main">Welcome back to Spork</Typography>
                <Typography variant="subtitle1" color="primary.contrastText" sx={{mt: 0.8}}>Login to access your
                  meal</Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", width: 400}}>
                {/*TODO: Add <TextField error />*/}
                <TextField label="Username" variant="outlined" sx={{mt: 2, mb: 2, height: 60}}/>
                <TextField label="Password" variant="outlined" type="password" sx={{mb: 2, height: 60}}/>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{height: 60, color: "primary.light", fontWeight: "bold"}}
                  disableElevation
                >
                  Login
                </Button>
              </Box>
              <Box sx={{display: "inline-flex", mt: 2}}>
                <Typography variant="subtitle1" color="gray">Don't have an account?</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ml: 0.5}}>
                  <Link underline="none">Sign Up</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    )
  }
}

export default LoginForm;

