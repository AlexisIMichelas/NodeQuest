// Chargez les variables d'environnement depuis le fichier .env
require('dotenv').config();

// Récupérez les variables d'environnement
const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

// Affichez le message
console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);
