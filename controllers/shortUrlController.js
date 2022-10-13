const shortId = require("shortid");
const validUrl = require("valid-url");

let shortUrlCreate = async (req, res) => {
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
};

module.exports = {
  shortUrlCreate: shortUrlCreate,
};
