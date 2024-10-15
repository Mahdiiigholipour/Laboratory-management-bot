
const pages = require("./settings");
const paths = require("./keyboardsPath");

async function setHome(ctx) {
  ctx.session.keyboardPath = paths.home;
  if (!ctx.session.keyboardSet) {
    await ctx.reply("test", {
      reply_markup: pages.home.keyboard,
    });

    ctx.session.keyboardSet = true;
  } else {
    await ctx.reply("test");
  }
}

async function setMaster(ctx) {
  console.log("setMaster");
  ctx.session.keyboardPath = paths.master;

  await ctx.reply("test", {
    reply_markup: master.keyboard,
  });

  ctx.session.keyboardSet = true;
  return 0;
}

const setter = { setHome, setMaster };

module.exports = setter;
