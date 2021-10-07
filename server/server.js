require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();
const passport = require('passport');
const cookieSession = require('cookie-session');
const ideatorRouter = require('./routes/api');
const authRouter = require('./routes/auth.js');
const mongoose = require('mongoose')
require('./axiosResponseInterceptor')
require('./axiosRequestInterceptor')
const PORT = 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'breakfasticDB',
  })
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

// handle parsing request body
app.use(express.json());

// enable sessions using passport.js middleware
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
    httpOnly: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

/**
 * handle requests for static files
 */
app.use(express.static(path.resolve(__dirname, '../dist')));

// add route handler for api
app.use('/api', ideatorRouter);

// route handler for authentication
app.use('/auth', authRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// express error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

/**
 * start server
 */
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
