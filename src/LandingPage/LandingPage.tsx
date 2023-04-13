import React from "react";
import {Box, ThemeProvider, Typography} from "@mui/material";
import theme from "../constants";
import Background from "../assets/PictureTwo.jpeg";
import BlackBackground from "../assets/BlackBackground.jpeg";
import DiningIcon from "@mui/icons-material/Dining";

const LandingPage = () => {
  return (
    <Box sx={{height: "100vh", width: "100%"}}>
      <ThemeProvider theme={theme}>
        <img src={Background} alt="background" width="100%" height="100%"/>
        <img src={BlackBackground} alt="background overlay" width="100%" height="100%"
             style={{position: "absolute", left: 0, width: "50%", opacity: 0.2}}/>
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", top: 50}}>
          <DiningIcon sx={{color: "primary.light", fontSize: 35, ml: 5}}/>
          <Typography variant="h5" fontWeight="bold" color="primary.light" sx={{ml: 1}}>
            Spork
          </Typography>
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default LandingPage;