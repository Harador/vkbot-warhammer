//--------------VK----------\\
const VkBot = require("node-vk-bot-api");
const token = 0;
const bot = new VkBot(token);
//--------MONGO---------\\
const mongoose = require("mongoose");
const uri = 0;

//-------------------------------\\
//! функция-обработчик запросов
let getReply = require("./methods/index");
//!

bot.on(async (ctx) => {
  let message = ctx.message.text;
  if (message[0] === "/") {
    let id = ctx.message.from_id;
    message = message.substr(1);
    return getReply(message, id, ctx);
  }
});

async function start() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongo connect");
    await bot.startPolling();
    console.log("bot started");
  } catch (error) {
    console.log(error);
  }
}

start();
