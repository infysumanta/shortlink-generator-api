const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const constant = require("./utils/constant");
require("dotenv").config();

mongoose.connect(constant.MONGODB_URI, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
  }
});

const app = express();

app.use(express.json());
app.use(cors());

app.listen(constant.PORT, () => {
  console.log("Listening on port " + constant.PORT);
});
