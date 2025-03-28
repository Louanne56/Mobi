import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CelebrityMusicBlindtest from './CelebrityMusicBlindtest';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CelebrityMusicBlindtest />
    </ThemeProvider>
  );
}

export default App;