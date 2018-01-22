'use strict';
// require all models
const User = require('./user');
const Address = require('./address');

// associations
Address.belongsTo(User);
User.hasMany(Address);

module.export = ( User, Address );
