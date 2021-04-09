const World = require("../Models/World.js");
const isAdmin = require("../validate/isAdmin");
const isTrueStar = require("../validate/isTrueStar");

async function createWorld(ctx, mes, id) {
  if (!isAdmin(id)) return ctx.reply("У вас нет прав на эту команду");
  if (mes.length != 5)
    return ctx.reply(
      `Команда введена неверно, напишите "/помощь создать" для получения справки`
    );

  for (var i = 1; i < mes.length; i++) {
    mes[i] = mes[i].replaceAll("..", " ");
  }
  // валидация------------
  if (!isTrueStar(mes[1])) return ctx.reply(`Системы ${mes[1]} не существует`);
  const w = await World.findOne(
    { звезда: mes[1], номер: mes[2] },
    { мир: 1, звезда: 1 }
  ).lean();
  console.log(w);
  if (w)
    return ctx.reply(`Мир номер ${mes[2]} уже существует в системе ${mes[1]}`);
  //-----------------------

  try {
    const newWorld = new World({
      звезда: mes[1],
      номер: mes[2],
      особенности: mes[3],
      параметры: mes[4],
    });
    await newWorld.save();
    return ctx.reply(`Мир номер ${mes[2]} создан в системе ${mes[1]}`);
  } catch (error) {
    console.log(error);
    return ctx.reply("Ошибка при создании мира");
  }
}

module.exports = createWorld;
