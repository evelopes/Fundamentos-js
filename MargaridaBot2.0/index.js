//conectar com o bot
//










const { Telegraf } = require('telegraf');

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const url = process.env.URL_BUSCA_DE_DADOS;

//https://www.youtube.com/watch?v=elmm7woOJyU&t=1699s

//https://www.youtube.com/watch?v=q6rNLMC5l3o&t=308s

