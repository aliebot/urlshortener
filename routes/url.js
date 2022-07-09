const express = require('express');
const router = express.Router();
// const { ensureAuth, ensureGuest } = require('../middleware/auth');
const Url = require('../entities/Url.e');

// @desc    Create a shortened url
// @route   POST /api/createUrl
router.post('/createUrl', async (req, res) => {
  try {
    await Url.create(req.body);
    res.json({ shortUrl: req.body });
  } catch (error) {
    res.send(error);
  }
});

router.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  try {
    let url = await Url.findOneAndUpdate(
      { shortId },
      { $inc: { clicked: 1 } },
      { new: true, runValidators: true }
    );

    if (!url) {
      return res.status(404).json({ error: 'Url not found' });
    } else {
      return res.status(200).redirect(url.url);
    }
  } catch (error) {
    console.error('Error redirecting to url', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:shortId', async (req, res) => {
  try {
    await Url.findOneAndDelete({ shortId: req.params.shortId });
    return res.status(204).json({ message: 'Url deleted' });
  } catch (error) {
    console.error('Error deleting url', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
