var express = require('express');
var router = express.Router();

// GET /api — simple health check
// this just tells us "yes, the server is alive and working"
// useful for quickly checking if the API is running
router.get('/', function(req, res) {
  res.json({ message: 'API is running' });
});

// make this router available to app.js
module.exports = router;
