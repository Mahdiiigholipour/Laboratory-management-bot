const { Keyboard } = require("grammy");
const labels = require("./labels");

function home() {
  return new Keyboard()
    .text(labels.home.master)
    .text(labels.home.search)
    .row()
    .text(labels.home.invoice)
    .text(labels.home.product)
    .row()
    .text(labels.home.shortcut)
    .oneTime()
    .resized();
}

function master() {
  return new Keyboard()
    .text(labels.master.add)
    .text(labels.master.edit)
    .text(labels.master.details)
    .row()
    .add(labels.master.back)
    .add(labels.master.home)
    .oneTime()
    .resized();
}
const keyboards = { home,master };
module.exports = keyboards;
