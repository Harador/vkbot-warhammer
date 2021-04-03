const VkBot = require("node-vk-bot-api");
let data = require("./data");
const token =
  "f00105b27867e6fcabf67a37f76be92108f93a24afe0a94e067a6a452681d6297185e9b277b3caf2b00ab";

const bot = new VkBot(token);

bot.on((ctx) => {
  let message = ctx.message.text;
  let id = ctx.message.from_id;
  if (message[0] === "/") {
    console.log(id);
    ctx.reply(getReply(message, id));
  }
});

function getReply(mes, id) {
  // if (id !== data.worlds["Молис"]) {
  //   return "Ошибка: запрещено управлять чужим миром.";
  // }
  mes = mes.substr(1);
  if (mes.toLowerCase() == "привет" || mes.toLowerCase() == "привет!")
    return 'Сервочереп приветствует тебя *бип-боп* чтобы получить список команд, введи "help" или "помощь"';
  mes = mes.toLowerCase().split(" ");
  switch (mes[0]) {
    case "миры":
      return getAllWorlds();
      break;
    case "мир":
      return mes[1] ? getWorld(mes[1]) : "Ошибка: не указан второй аргумент";
      break;
    case "помощь":
    case "help":
      return getHelp();
      break;
    default:
      return `Ошибка: команда не распознана *бип-боп*, введите "help" или "помощь" для вывода списка команд`;
  }
}
function getWorld(mes) {
  switch (mes) {
    case "агромир":
    case "агро":
    case "молис":
      return "Агромир Молис https://vk.com/molisworld";
      break;
    case "пром":
    case "промышленный":
    case "промка":
    case "тетрокс":
      return "Промышленный мир Тетрокс https://vk.com/club203474660";
      break;
    case "кузница":
    case "кузня":
    case "механикус":
    case "адептус-механикус":
    case "торментум":
      return "Мир-кузница Торментум https://vk.com/forgetormentum";
      break;
    case "тюрьма":
    case "лимбидус":
      return "Мир-тюрьма Лимбидус https://vk.com/club203470108";
      break;
    default:
      return "Мир не найден";
  }
}
function getAllWorlds() {
  return `Агромир Молис https://vk.com/molisworld
  Промышленный мир Тетрокс https://vk.com/club203474660
  Мир-кузница Торментум https://vk.com/forgetormentum
  Мир-тюрьма Лимбидус https://vk.com/club203470108
  `;
}
function getHelp() {
  return `Список команд:
  1) /миры - список всех миров
  2) /мир [тип/название] - выводит название мира с ссылкой на группу`;
}
bot.startPolling();
