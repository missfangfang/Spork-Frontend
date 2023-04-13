import React from "react";
import { Link } from "react-router-dom";
import {Box, Button, TextField, ThemeProvider, Typography} from "@mui/material";
import theme from "../constants";
import LandingPage from "../LandingPage/LandingPage";


class SignUpForm extends React.Component<any, any> {
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
                <Typography variant="h5" fontWeight="bold" color="primary.main">Create an account</Typography>
                <Typography variant="subtitle1" color="primary.contrastText" sx={{mt: 0.8}}>Start here to enjoy 30 minute deliveries</Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "column", justifyContent: "flex-start", width: 400}}>
                {/*TODO: Add <TextField error />*/}
                <TextField label="Username" variant="standard" sx={{mt: 2, mb: 2, height: 60}}/>
                <TextField label="Password" variant="standard" type="password" sx={{mb: 2, height: 60}}/>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{height: 60, color: "primary.light", fontWeight: "bold"}}
                  disableElevation
                >
                  Sign Up
                </Button>
              </Box>
              <Box sx={{display: "inline-flex", mt: 2}}>
                <Typography variant="subtitle1" color="gray">Already have an account?</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ml: 0.5}}>
                  <Link to={`/`}>Login</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </Box>
    );
  };
}

export default SignUpForm;