const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShortUrl = new Schema(
  {
    shortId: { type: String, required: true },
    fullUrl: { type: String, required: true },
    hitCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ShortUrl", ShortUrl);
