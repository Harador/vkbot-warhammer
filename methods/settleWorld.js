const World = require("../Models/World.js");
const isAdmin = require("../validate/isAdmin");
const isTrueStar = require("../validate/isTrueStar");

async function settleWorld(ctx, mes, id) {
  if (!isAdmin(id)) return ctx.reply("У вас нет прав на эту команду");
  console.log(mes, mes.length);
  if (mes.length != 14)
    return ctx.reply(
      `Команда введена неверно, напишите "/помощь заселить" для получения справки`
    );

  for (var i = 1; i < mes.length; i++) {
    mes[i] = mes[i].replaceAll("..", " ");
  }
  // валидация------------
  if (!isTrueStar(mes[1])) return ctx.reply(`Системы ${mes[1]} не существует`);
  const w = await World.findOne(
    { звезда: mes[1], номер: mes[2], игрок: { $eq: "ИИ" } },
    { номер: 1, звезда: 1, игрок: 1 }
  ).lean();
  console.log(w);
  if (!w)
    return ctx.reply(
      `Мир номер ${mes[2]} отсутствует в системе ${mes[1]}, либо уже заселен`
    );

  //-----------------------

  try {
    await World.updateOne(
      { звезда: mes[1], номер: mes[2] },
      {
        $set: {
          мир: mes[3],
          тип: mes[4],
          игрок: mes[5],
          группа: mes[6],
          губернатор: mes[7],
          столица: mes[8],
          культура: mes[9],
          развитие: mes[10],
          население: mes[11],
          ресурсы: mes[12],
          потребление: mes[13],
        },
      }
    );
    return ctx.reply(
      `Мир ${mes[3]} заселен, не забудьте отдельно добавить userid, изображение, биографию(не доработано!) и организации, если они есть, с помощью команды /ред ${mes[3]} ключ значение`
    );
  } catch (error) {
    console.log(error);
    ctx.reply("Ошибка при редактировании мира");
  }
}

module.exports = settleWorld;
