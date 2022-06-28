var colors = require('colors');

require('dotenv').config();

console.log("El proyecto funciona 😀");

console.log("Si veus això lila, s'ha instalat colors".magenta);

console.log(("El teu nom d'usuari és " + process.env.USER_NAME).blue);