import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Component } from 'react';
import Utensils from '../assets/Utensils.png';
import axios from 'axios';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();



class Signup extends Component {
  // constructor(props) {
  //   super(props);
    // this.state = {
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   password: '',
    //   redirect: false
    // }
    // this.handleOnChange = this.handleOnChange.bind(this);
  //   this.signUp = this.signUp.bind(this);
  // }
  
  signUp () {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log('firstName', firstName)
    // TO DO: CHECK WITH BACKEND ON PROPER ENDPOINT
    axios.post('/auth/signup', {
      firstName: firstName, 
      lastName: lastName,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
   /* fetch("/auth/signup",  {
        method: "POST",
        body: {
          firstName: firstName, 
          lastName: lastName,
          email: email,
          password: password
        },
        headers: { "Content-Type": "application/json" },
      })
      .then(data => data.json())
      .then(data => {
        console.log('data:', data)
      })*/
    };

  render() {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img src={Utensils}></img>
             </Link>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>

            </Grid>
            {/* <Link href="/home"> */}
            <Button
              onClick={this.signUp}
              href='/'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {/* </Link> */}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}
}

export default Signup