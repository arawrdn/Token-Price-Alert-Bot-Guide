const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");
const { telegramBotToken, telegramChatId, discordWebhookUrl, tokens } = require("./config");

const bot = new TelegramBot(telegramBotToken);

async function getPrice(symbol) {
  const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol.toLowerCase()}&vs_currencies=usd`);
  return res.data[symbol.toLowerCase()].usd;
}

async function checkTokens() {
  for (const token of tokens) {
    const price = await getPrice(token.symbol);
    if (price >= token.threshold) {
      const msg = `${token.symbol} price alert! Current price: $${price}`;
      
      // Telegram
      await bot.sendMessage(telegramChatId, msg);
      
      // Discord
      await axios.post(discordWebhookUrl, { content: msg });
    }
  }
}

// Run every minute
setInterval(checkTokens, 60 * 1000);
console.log("Token Price Alert Bot is running...");
