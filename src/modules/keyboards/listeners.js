const autoBind = require("auto-bind");
const keyboardsPath = require("./keyboardsPath");
const KeyboardStructure = require("./structure");
const KeyboardDesigner = require("./designer");

class KeyboardListener {
  #structure;
  #designer;
  constructor() {
    autoBind(this);
    this.#structure = KeyboardStructure;
    this.#designer = KeyboardDesigner;
  }

  async autoListen(ctx) {
    switch (ctx.session.path) {
      // HOME
      case keyboardsPath.home:
        await this.listen_home(ctx);
        break;

      // MASTER ----
      case keyboardsPath.home_master:
        await this.listen_home_master(ctx);
        break;

      // SEARCH ----
      case keyboardsPath.home_search:
        await this.listen_home_search(ctx);
        break;

      // PRODUCT ----
      case keyboardsPath.home_product:
        console.log("mahdi");
        await this.listen_home_product(ctx);
        break;

      // SHORTCUT
      case keyboardsPath.shortcut:
        await this.listen_shortcut(ctx);
        break;

      default:
        throw new Error("INVALID KEYBOARD PATH!");
        break;
    }
  }

  // HOME
  async listen_home(ctx) {
    const keyboard = this.#findKeyboard(ctx);
    for (item in keyboard) {
      if (ctx.msg.text === keyboard[item].toString()) {
        if (keyboard[item] === keyboard.shortcut) {
          ctx.session.path = keyboardsPath.shortcut;
          await this.#designer.set_shortcut(ctx);
        } else {
          await this.#designer.autoSet(ctx, this.#setPath(ctx, item));
        }
      }
    }
    return ctx.session.path;
  }

  // MASTER ----
  async listen_home_master(ctx) {}

  // SEARCH ----
  async listen_home_search(ctx) {}

  // PRODUCT ----
  async listen_home_product(ctx) {
    const keyboard = this.#findKeyboard(ctx);
    for (item in keyboard) {
      if (this.#goHome(ctx, keyboard)) break;
      if (ctx.msg.text === keyboard[item]) {
        console.log("goHome");
        await this.#designer.autoSet(ctx, this.#setPath(ctx, item));
      }
    }
  }

  // SHORTCUT
  async listen_shortcut(ctx) {
    const keyboard = this.#findKeyboard(ctx);

    for (item in keyboard) {
      if (this.#goHome(ctx, keyboard)) break;
      if (ctx.msg.text === keyboard[item])
        this.#designer.autoSet(ctx, this.#setPath(ctx, item));
    }
  }

  // private methods

  #setPath(ctx, item) {
    ctx.session.path =
      keyboardsPath[
        `${ctx.session.path.replace("/", "_").slice(1)}_${item.toString()}`
      ];
    return ctx.session.path;
  }
  async #goHome(ctx, keyboard) {
    // use => if (this.#goHome(ctx, keyboard)) break;
    if (ctx.msg.text === keyboard?.home) {
      ctx.session.path = keyboardsPath.home;
      await this.#designer.set_home(ctx);
      return true;
    }
    return false;
  }
  #findKeyboard(ctx) {
    return this.#structure["L" + ctx.session.path.replaceAll("/", "_")];
  }
}

module.exports = new KeyboardListener();
