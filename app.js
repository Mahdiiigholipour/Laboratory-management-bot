const { Bot, InlineKeyboard, Keyboard, session } = require("grammy");
const listeners = require("./src/middlewares/listeners");
require("dotenv").config();
const bot = new Bot(process.env.BOT_TOKEN);

bot.use(session({ initial: () => ({ keyboardSet: false, keyboardPath: "" }) }));

listeners.command(bot);
listeners.keyboard(bot);


bot.start();























// bot.command("start", async (ctx) => {
//   if (!ctx.session.keyboardSet) {
//     await ctx.reply("hello", {
//       reply_markup: HomePage.keyboards,
//     });

//     ctx.session.keyboardSet = true;
//   } else {
//     await ctx.reply("hello");
//   }
// });

// bot.on("message:text", async (ctx) => {
//   switch (ctx.msg.text) {
//     case "پزشک":
//       await ctx.reply("pezeshk", { reply_markup: { remove_keyboard: true } });
//       break;
//     case "جست و جو":
//       await ctx.reply("jost o ju", {
//         reply_markup: { remove_keyboard: true },
//       });

//       break;
//     case "فاکتور":
//       await ctx.reply("factor", { reply_markup: { remove_keyboard: true } });

//       break;
//     case "ثبت محصول جدید":
//       await ctx.reply("qeimat mahsul", {
//         reply_markup: { remove_keyboard: true },
//       });

//       break;

//     default:
//       await ctx.reply("pezeshk");

//       break;
//   }
// });
