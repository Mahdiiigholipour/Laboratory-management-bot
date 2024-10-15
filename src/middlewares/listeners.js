const {setHome} = require("../modules/pages/adjustment");
const labels = require("../modules/pages/labels");
const pages = require("../modules/pages/settings");
function command(bot) {
  bot.command("start", setHome);
}

async function keyboard(bot) {
  bot.on("message:text", async (ctx) => {
    for (item in labels) {
      if (item.toString() === ctx.session.keyboardPath) {
        console.log("hello");
        await pages[ctx.session.keyboardPath].listeners(ctx);
      }
    }
  });
}
const listeners = { command, keyboard };
module.exports = listeners;
