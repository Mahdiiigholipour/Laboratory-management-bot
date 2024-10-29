const autoBind = require("auto-bind");
const KeyboardStructure = require("./structure");
const keyboardPath = require("./keyboardsPath");
const pageMessages = require("./messages");

class KeyboardDesigner {
  #structure;
  constructor() {
    autoBind(this);
    this.#structure = Object.freeze({
      // HOME
      home: KeyboardStructure.B_home(),

      // MASTER ----
      home_master: KeyboardStructure.B_home_master(),

      // SEARCH ----
      home_search: KeyboardStructure.B_home_search(),

      // PRODUCT ----
      home_product: KeyboardStructure.B_home_product(),
      home_product_retainer: KeyboardStructure.B_home_product_retainer(),
      home_product_spaceSaver: KeyboardStructure.B_home_product_spaceSaver(),
      home_product_nightGuardAndBleaching:
        KeyboardStructure.B_home_product_nightGuardAndBleaching(),
      home_product_treatmentDevices:
        KeyboardStructure.B_home_product_treatmentDevices(),
      home_product_other: KeyboardStructure.B_home_product_other(),

      // SHORTCUT
      shortcut: KeyboardStructure.B_shortcut(),
    });
  }

  // set keyboards

  async autoSet(ctx) {
    console.log("autoset");

    switch (ctx.session.path) {
      // HOME
      case keyboardPath.home:
        await this.set_home(ctx);
        break;

      // MASTER ----
      case keyboardPath.home_master:
        await this.set_home_master(ctx);
        break;

      // SEARCH ----
      case keyboardPath.home_search:
        await this.set_home_search(ctx);
        break;

      // PRODUCT ----
      case keyboardPath.home_product:
        await this.set_home_product(ctx);
        break;
      case keyboardPath.home_product_retainer:
        console.log("retainer");
        await this.set_home_product_retainer(ctx);
        break;
      case keyboardPath.home_product_spaceSaver:
        await this.set_home_product(ctx);
        break;
      case keyboardPath.home_product_nightGuardAndBleaching:
        await this.set_home_product(ctx);
        break;
      case keyboardPath.home_product_treatmentDevices:
        await this.set_home_product(ctx);
        break;
      case keyboardPath.home_product_other:
        await this.set_home_product(ctx);
        break;

      // SHORTCUT
      case keyboardPath.shortcut:
        console.log("shortcut");
        await this.set_shortcut(ctx);
        break;

      default:
        break;
    }
  }

  // HOME ----
  async set_home(ctx) {
    ctx.session.path = keyboardPath.home;
    await ctx.reply(pageMessages.select, {
      reply_markup: this.#structure.home,
    });
  }
  // MASTER ----
  async set_home_master(ctx) {
    ctx.session.path = keyboardPath.home_master;
    await ctx.reply(pageMessages.select, {
      reply_markup: this.#structure.home_master,
    });
  }

  // SEARCH ----
  async set_home_search(ctx) {
    ctx.session.path = keyboardPath.home_search;
    await ctx.reply(pageMessages.searchMethod, {
      reply_markup: this.#structure.home_search,
    });
  }
  // PRODUCT ----
  async set_home_product(ctx) {
    ctx.session.path = keyboardPath.home_product;
    await ctx.reply(pageMessages.selectPlan, {
      reply_markup: this.#structure.home_product,
    });
  }
  async set_home_product_retainer(ctx) {
    ctx.session.path = keyboardPath.home_product_retainer;
    await ctx.reply(pageMessages.selectPlan, {
      reply_markup: this.#structure.home_product_retainer,
    });
  }
  async set_home_product_spaceSaver(ctx) {
    ctx.session.path = keyboardPath.home_product_spaceSaver;
    await ctx.reply(pageMessages.selectPlan, {
      reply_markup: this.#structure.home_product_spaceSaver,
    });
  }
  async set_home_product_nightGuardAndBleaching(ctx) {
    ctx.session.path = keyboardPath.home_product_nightGuardAndBleaching;
    await ctx.reply(pageMessages.selectPlan, {
      reply_markup: this.#structure.home_product_nightGuardAndBleaching,
    });
  }
  async set_home_product_treatmentDevices(ctx) {
    ctx.session.path = keyboardPath.home_product_treatmentDevices;
    await ctx.reply(pageMessages.selectPlan, {
      reply_markup: this.#structure.home_product_treatmentDevices,
    });
  }
  async set_home_product_other(ctx) {
    ctx.session.path = keyboardPath.home_product_other;
    await ctx.reply(pageMessages.selectPlan, {
      reply_markup: this.#structure.home_product_other,
    });
  }
  // SHORTCUT
  async set_shortcut(ctx) {
    ctx.session.path = keyboardPath.shortcut;
    await ctx.reply(pageMessages.select, {
      reply_markup: this.#structure.shortcut,
    });
  }
}

module.exports = new KeyboardDesigner();
