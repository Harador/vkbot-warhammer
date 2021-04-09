const { Schema, model } = require("mongoose");

const World = new Schema({
  мир: {
    type: String,
    default: "N/A",
    trim: true,
  },
  тип: {
    type: String,
    default: "N/A",
    trim: true,
  },
  игрок: {
    type: String,
    default: "ИИ",
    trim: true,
  },
  userid: {
    type: String,
    default: "ИИ",
    trim: true,
  },
  группа: {
    type: String,
    default: "N/A",
    trim: true,
  },
  губернатор: {
    type: String,
    default: "N/A",
    trim: true,
  },
  столица: {
    type: String,
    default: "N/A",
    trim: true,
  },
  культура: {
    type: String,
    default: "N/A",
    trim: true,
  },
  развитие: {
    type: String,
    default: "N/A",
    trim: true,
  },
  население: {
    type: String,
    default: "N/A",
    trim: true,
  },
  ресурсы: {
    type: String,
    default: "N/A",
    trim: true,
  },
  потребление: {
    type: String,
    default: "N/A",
    trim: true,
  },
  номер: {
    type: String,
    default: "N/A",
    trim: true,
  },
  параметры: {
    type: String,
    default: "N/A",
    trim: true,
  },
  особенности: {
    type: String,
    default: "N/A",
    trim: true,
  },
  звезда: {
    type: String,
    default: "N/A",
    trim: true,
  },
  изображение: {
    type: String,
    default: "N/A",
    trim: true,
  },
  биография: {
    type: String,
    default: "N/A",
    trim: true,
  },
  организации: {
    type: String,
    default: "N/A",
    trim: true,
  },
});

module.exports = model("worlds", World);
