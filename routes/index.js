const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const Url = require('../entities/Url.e');

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => {
  try {
    let urls = await Url.find({ userID: req.user.id }).sort({ _id: -1 }).lean(); // return only the current logged in user's urls
    res.status(200).json({ user: req.user, urls: urls });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
