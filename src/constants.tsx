import {createTheme} from "@mui/material";
import {grey, lightGreen} from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: lightGreen[600],
      light: grey[50],
      contrastText: grey[500]
    },
    secondary: {
      main: lightGreen[900],
    }
  },
});

export default theme;