const World = require("../Models/World.js");
const isAdmin = require("../validate/isAdmin");
const isTrueKey = require("../validate/isTrueKey");
async function editWorld(ctx, mes, id) {
  if (!isAdmin(id)) return ctx.reply("У вас нет прав на эту команду");
  if (mes.length != 4) return ctx.reply("Команда введена неверно");
  if (!isTrueKey(mes[2])) return ctx.reply("Неверный ключ");

  mes[3] = mes[3].replaceAll("..", " ");

  try {
    const w = await World.findOne({ мир: mes }, { мир: 1 }).lean();
    if (w == null) return ctx.reply("Мир не найден");

    await World.updateOne({ мир: mes[1] }, { $set: { [mes[2]]: mes[3] } });
    return ctx.reply(`Мир ${mes[1]} обновлен`);
  } catch (error) {
    console.log(error);
    ctx.reply("Ошибка при редактировании мира");
  }
}

module.exports = editWorld;
