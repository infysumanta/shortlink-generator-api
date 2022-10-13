const shortId = require("shortid");
const validUrl = require("valid-url");
const ShortUrl = require("./../models/ShortUrl");

let shortUrlCreate = async (req, res, next) => {
  let link = req.body.url;
  if (link !== null && validUrl.isUri(link)) {
    try {
      let body = {
        shortId: shortId.generate(),
        fullUrl: link,
      };
      ShortUrl.create(body, (err, data) => {
        if (err) return next(err);
        return res.json({
          status: true,
          shortId: data.shortId,
          fullUrl: data.fullUrl,
          message: "Short Link created successfully",
        });
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
};

module.exports = {
  shortUrlCreate: shortUrlCreate,
};
