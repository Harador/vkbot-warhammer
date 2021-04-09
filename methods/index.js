let getAllWorlds = require("./getAllWorlds");
let createWorld = require("./createWorld");
let getHelp = require("./getHelp");
let findWorld = require("./findWorld");
let testAdd = require("./testAdd");
let getHello = require("./getHello");
let editWorld = require("./editWorld");
async function getReply(mes, id, ctx) {
  mes = mes.toLowerCase().split(" ");
  switch (mes[0]) {
    case "hey":
    case "привет":
      return getHello(ctx);
      break;
    case "создать":
      return createWorld(ctx, mes, id);
      break;
    case "test_add":
      return testAdd(ctx, mes, id);
      break;
    case "мир":
      return findWorld(ctx, mes);
      break;
    case "ред":
      return editWorld(ctx, mes, id);
      break;
    case "миры":
      return getAllWorlds(ctx);
      break;

    case "помощь":
    case "help":
      return getHelp(ctx, mes[1]);
      break;
    default:
      return ctx.reply(
        `Ошибка: команда не распознана *бип-боп*, введите "help" или "помощь" для вывода списка команд`
      );
  }
}

module.exports = getReply;
