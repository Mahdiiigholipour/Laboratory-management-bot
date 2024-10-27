const KeyboardListener = require("../modules/keyboards/listeners");
const keyboardPath = require("../modules/keyboards/keyboardsPath");
const KeyboardDesigner = require("../modules/keyboards/designer");
function command(bot) {
  bot.command("start", KeyboardDesigner.set_home);
}

async function keyboard(bot) {
  await bot.on("message:text", async (ctx) => {
    for (item in keyboardPath) {
      if (ctx.session.path === keyboardPath[item]) {
        await KeyboardListener.autoListen(ctx);
      }
    }
  });
}
const listeners = { command, keyboard };
module.exports = listeners;
