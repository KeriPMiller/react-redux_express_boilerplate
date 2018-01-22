const db = require('../db');
const {
  STRING
} = require('sequelize');

const User = db.define('User', {
  firstName: {
    type: STRING,
    allowNull: false
  },
  lastName: {
    type: STRING,
    allowNull: false
  },
  profileImg: {
    type: STRING,
    default: 'http://placecage.com/300/300'
  },
  email: {
    type: STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
}, {
  getterMethods: {
    fullname: function() {
      let first = this.getDataValue('firstName');
      let last = this.getDataValue('lastName');

      return `${first} ${last}`;
    }
  }
});

module.exports = User;
