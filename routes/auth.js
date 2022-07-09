const express = require('express');
const passport = require('passport');
const router = express.Router();

// @desc    Auth with google
// @route   GET /auth/google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// @desc    Google callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/', // if user fails to login, redirect to home page
  }),
  (req, res) => {
    res.json({ message: 'User successfully logged in' }); // if successful redirect to dashboard
  }
);

// @desc    Logout user
// @route   GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      console.error(err);
    }
  });
  res.status(200).json({ message: 'User successfully logged out' });
});

module.exports = router;
