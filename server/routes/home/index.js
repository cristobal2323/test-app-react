const express = require("express");
const homeCtrl = require("../../controllers/home");

const home = express.Router();

home.get("/", homeCtrl.getHome);

module.exports = {
  home,
};
