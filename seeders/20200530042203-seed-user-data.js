'use strict';
const userData = require('../rawdata/rawUser.json');
const { hashPassword } = require('../helpers/bcrypt.js');

module.exports = {
  up: (queryInterface, Sequelize) => {
    userData.forEach(user => {
      user.createdAt = new Date();
      user.updatedAt = new Date();
      user.password = hashPassword(user.password);

      return user;
    })

    return queryInterface.bulkInsert('Users', userData, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
