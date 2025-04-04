const express = require("express");
const router = express.Router();

const { triggerSOS } = require('../controllers/alert.controller.js')

router.post('/sos',triggerSOS);

module.exports = router;