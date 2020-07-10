const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports =  new Sequelize('postgres', 'chaitanya', 'kakakakaAa3', {
  host: 'localhost',
  dialect: 'postgres'
});
