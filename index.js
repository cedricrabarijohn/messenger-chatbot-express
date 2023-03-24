const dotenv = require("dotenv");
dotenv.config();
var app = require("express")();
var server = require("http").Server(app);
var MessengerPlatform = require("facebook-bot-messenger");

var bot = MessengerPlatform.create({
  pageID: process.env.PAGE_ID,
  appID: process.env.APP_ID,
  appSecret: process.env.APP_SECRET,
  validationToken: process.env.VALIDATION_TOKEN,
  pageToken: process.env.PAGE_TOKEN,
});

app.use(bot.webhook("/webhook"));
bot.on(MessengerPlatform.Events.MESSAGE, function (userId, message) {
  // add code below.
  bot.sendTextMessage(userId, "Hello You");
});
server.listen(8080);

// bot.sendTextMessage(userId, "Hello You");
