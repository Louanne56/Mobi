import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1DB954", // Vert Spotify
    },
    secondary: {
      main: "#191414", // Noir Spotify
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
