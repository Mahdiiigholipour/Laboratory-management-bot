const PageAdjust = require("./adjustment");
const keyboards = require("./keyboards");
const listeners = require("./functions");

const pages = Object.freeze({
  home: {
    keyboard: keyboards.home(),
    listeners: listeners.home,
  },
  master: {
    keyboard: keyboards.master(),
    listeners: listeners.master,
  },
});

module.exports = pages;
