const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const validUrl = require("valid-url");

router.get("/", (req, res) => {
  res.send({
    test: "Hello, world!",
  });
});

router.get("/short/create", async (req, res) => {
  let link = req.body.url;
  if (link !== null && validUrl.isUri(link)) {
    try {
      return res.json({
        status: true,
        shortLink: shortId.generate(),
      });
    } catch (err) {
      console.log(err);
      return res.json({
        status: false,
        message: "Something went wrong",
      });
    }
  } else {
    return res.json({
      status: false,
      message: "Please Enter a Valid URL",
    });
  }
});

module.exports = router;
