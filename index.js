//--------------VK----------\\
const VkBot = require("node-vk-bot-api");
const token =
  "f00105b27867e6fcabf67a37f76be92108f93a24afe0a94e067a6a452681d6297185e9b277b3caf2b00ab";
const bot = new VkBot(token);
//--------MONGO---------\\
const mongoose = require("mongoose");
const uri =
  "mongodb+srv://harador:O8mnfA3lrNg4yvEm@cluster1.bvncx.mongodb.net/WarhammerVK?retryWrites=true&w=majority";

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
