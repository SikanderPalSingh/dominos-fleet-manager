
const express = require('express');
const router = express.Router();
const { sendText, makeCall } = require('../controllers/notifyController');

router.post('/text', sendText);
router.post('/call', makeCall);

module.exports = router;
