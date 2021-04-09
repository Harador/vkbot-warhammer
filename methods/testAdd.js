const World = require("../Models/World.js");

async function testAdd(ctx, mes, id) {
  if (id != 160456277) return ctx.reply("У вас нет прав на эту команду");
  if (mes.length < 2) return ctx.reply("Неверный ввод");
  for (var i = 0; i < mes.length; i++) {
    mes[i] = mes[i].replace(/%%/gi, " ");
  }

  console.log(mes);
  try {
    const tor = new World({
      мир: mes[1],
      тип: mes[2],
      игрок: mes[3],
      userid: mes[4],
      группа: mes[5],
      губернатор: mes[6],
      столица: mes[7],
      культура: mes[7],
      развитие: mes[8],
      население: mes[8],
      ресурсы: mes[8],
      потребление: mes[9],
      номер: mes[10],
      параметры: mes[11],
      особенности: mes[12],
      звезда: mes[13],
    });
    await tor.save();
    return ctx.reply(`Мир ${mes[1]} создан`);
  } catch (error) {
    console.log(error);
    return ctx.reply("Ошибка при создании мира");
  }
}

module.exports = testAdd;
