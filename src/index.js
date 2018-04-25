const Telegram = require("telegraf/telegram");
const fs = require("fs");

if (!process.env.BOT_TOKEN) {
  console.error("BOT_TOKEN env var not set!");
  process.exit(1);
}

if (!process.env.OWNER_ID) {
  console.error("OWNER_ID env var not set!");
  process.exit(1);
}

const telegram = new Telegram(process.env.BOT_TOKEN);

telegram.uploadStickerFile(
  process.env.OWNER_ID,
  fs.readFileSync("./uploads/gojill1/4556512.png")
);

// telegram.createNewStickerSet(process.env.OWNER_ID, "test", "Test Sticker
// Set", {
//   png_sticker: "gojill1/4556512.png",
//   emojis: "😉"
// });
