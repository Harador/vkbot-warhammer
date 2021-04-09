function isTrueKey(key) {
  const keys = [
    "мир",
    "тип",
    "игрок",
    "группа",
    "губернатор",
    "культура",
    "ресурсы",
    "потребление",
    "параметры",
    "особенности",
    "звезда",
    "биография",
  ];
  return keys.includes(key);
}

module.exports = isTrueKey;
