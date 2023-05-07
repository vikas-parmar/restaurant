import { orange } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9401',
      contrastText: "#fff"
    },
    secondary: {
      main: '#3F3232',
    },
    error: {
      main: orange.A400,
    },
  },
});

export default theme;