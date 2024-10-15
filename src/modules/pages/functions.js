const {setMaster} = require("./adjustment");
const labels = require("./labels");

async function home(ctx) {
  switch (ctx.msg.text) {
    case labels.home.master:
      await ctx.reply(labels.home.master, {
        reply_markup: { remove_keyboard: true },
      });
      setMaster(ctx)
      break;
    case labels.home.search:
      await ctx.reply("jost o ju", {
        reply_markup: { remove_keyboard: true },
      });

      break;
    case labels.home.invoice:
      await ctx.reply("factor", {
        reply_markup: { remove_keyboard: true },
      });

      break;
    case labels.home.product:
      await ctx.reply("qeimat mahsul", {
        reply_markup: { remove_keyboard: true },
      });

      break;
    case labels.home.shortcut:
      await ctx.reply("qeimat mahsul", {
        reply_markup: { remove_keyboard: true },
      });

      break;

    default:
      await ctx.reply("pezeshk");

      break;
  }
}

async function master(ctx) {
  switch (ctx.msg.text) {
    case labels.home.master:
      await ctx.reply("pezeshk", {
        reply_markup: { remove_keyboard: true },
      });
      break;
    case labels.home.search:
      await ctx.reply("jost o ju", {
        reply_markup: { remove_keyboard: true },
      });

      break;
    case labels.home.invoice:
      await ctx.reply("factor", {
        reply_markup: { remove_keyboard: true },
      });

      break;
    case labels.home.product:
      await ctx.reply("qeimat mahsul", {
        reply_markup: { remove_keyboard: true },
      });

      break;
    case labels.home.shortcut:
      await ctx.reply("qeimat mahsul", {
        reply_markup: { remove_keyboard: true },
      });

      break;

    default:
      await ctx.reply("pezeshk");

      break;
  }
}

const listeners = { home, master };
module.exports = listeners;
