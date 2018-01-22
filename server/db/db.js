const Sequelize = require('sequelize');
const pjson = require(./package.json);
// default db name is set to project name
const projectName = pjson.name;

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${projectName}`, {
    logging: false,
    operatorsAliases: false
  }
);

module.exports = db;
