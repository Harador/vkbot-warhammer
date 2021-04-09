const World = require("../Models/World.js");
const isTrueKey = require("../validate/isTrueKey");
async function findWorld(ctx, mes) {
  console.log(mes);
  let key = mes[2];

  try {
    let w;
    if (!key) {
      w = await World.findOne(
        { мир: mes[1] },
        { мир: 1, тип: 1, группа: 1, игрок: 1, _id: 0 }
      ).lean();
    } else if (key == "+") {
      w = await World.findOne(
        { мир: mes[1] },
        {
          мир: 1,
          тип: 1,
          номер: 1,
          игрок: 1,
          группа: 1,
          губернатор: 1,
          столица: 1,
          культура: 1,
          развитие: 1,
          организации: 1,
          население: 1,
          ресурсы: 1,
          потребление: 1,
          особенности: 1,
          звезда: 1,
          _id: 0,
        }
      ).lean();
    } else if (key == "р" || key == "ресурсы") {
      w = await World.findOne(
        { мир: mes[1] },
        {
          мир: 1,
          тип: 1,
          игрок: 1,
          ресурсы: 1,
          потребление: 1,
          население: 1,
          _id: 0,
        }
      ).lean();
    } else if (key == "п" || key == "параметры") {
      w = await World.findOne(
        { мир: mes[1] },
        {
          мир: 1,
          тип: 1,
          игрок: 1,
          номер: 1,
          параметры: 1,
          особенности: 1,
          звезда: 1,
          _id: 0,
        }
      ).lean();
    } else if (isTrueKey(key)) {
      w = await World.findOne(
        { мир: mes[1] },
        { мир: 1, [key]: 1, _id: 0 }
      ).lean();
    }
    if (!w || w.length == 0) return ctx.reply("Мир или ключ не найден");
    let reply = "";
    for (let key in w) {
      reply += `${key}: ${w[key]}
      `;
    }
    return ctx.reply(reply);
  } catch (error) {
    return ctx.reply("ошибка");
  }
}

module.exports = findWorld;
