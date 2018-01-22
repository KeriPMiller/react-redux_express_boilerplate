'use strict'
const debug = require('debug')('sql');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');

// default db name is set to project name
const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`;

module.exports = new Sequelize(connectionString, {
  logging: debug, // export DEBUG=sql in the environment to get SQL queries
  native: true,   // lets Sequelize know we can use pg-native for ~30% more speed. Take out if not using pg-native.
  operatorsAliases: false // gets rid of Sequelize Opperators warning
});
