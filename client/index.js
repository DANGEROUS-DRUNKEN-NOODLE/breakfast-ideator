import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";

import App from './App';

const font = "'Source Serif Pro', sans-serif";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFFFFF',
      light: '#1d414a',
    },
    secondary: {
      main: '#00b4f5',
    },
    background: {
      default: '#00c2cb',
      paper: 'white',
    },
    text: {
      primary: '#181818',
      secondary: '#AE2012',
    },
  },
  typography: {
    fontFamily: font,
  }
});

render(
  
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('app'),
);
