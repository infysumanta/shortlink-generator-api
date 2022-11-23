const express = require("express");
const router = express.Router();

const { shortUrlCreate } = require("../controllers/shortUrlController");

router.get("/", (req, res) => {
  res.send({
    status: false,
    message: "Not A Valid Url",
  });
});

router.get("/short/create", shortUrlCreate);

module.exports = router;
