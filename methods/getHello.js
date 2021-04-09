function getHello(ctx) {
  return ctx.reply(
    'Сервочереп приветствует тебя *бип-боп* чтобы получить список команд, введи "help" или "помощь"'
  );
}
module.exports = getHello;
