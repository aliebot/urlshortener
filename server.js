const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const dbconnect = require('./config/db');

// Load environment variables from .env file
dotenv.config({ path: './config/config.env' });
require('./config/passport')(passport);

const app = express();
// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dbconnect();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// express session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/url'));

app.listen(
  process.env.PORT || 8080,
  console.log(`Server started in ${process.env.NODE_ENV} mode on port 8080`)
);
