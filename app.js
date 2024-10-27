const { Bot, session } = require("grammy");
const listeners = require("./src/middlewares/listeners");
require("dotenv").config();
const bot = new Bot(process.env.BOT_TOKEN);

async function main() {
  bot.use(session({ initial: () => ({ keyboardSet: false, path: "" }) }));
  listeners.command(bot);

  await listeners.keyboard(bot);

  bot.start();
}

main();
