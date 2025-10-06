# TokenPriceAlertBot

A Node.js bot that monitors cryptocurrency token prices and sends alerts to Telegram or Discord when price thresholds are reached.

## Features
- Monitor multiple tokens simultaneously
- Send alerts via Telegram and Discord
- Configurable thresholds per token
- Runs continuously or on schedule

## Setup & Run

```bash
# 1. Clone the repository
git clone https://github.com/your-username/TokenPriceAlertBot
cd TokenPriceAlertBot

# 2. Install dependencies
npm install
# or
yarn install

# 3. Configure tokens and API keys
# Edit src/config.js with your tokens, thresholds, and Telegram/Discord info

# 4. Run the bot
node src/bot.js
