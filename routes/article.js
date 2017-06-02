var express = require('express');
var router = express.Router();
var request = require("request");

/* GET article. */
router.get('/', function(req, res) {
  request("http://shortlist.studio/api/v1/posts/171", (error, response, body) => {
    res.send(body);
  });
});

module.exports = router;
