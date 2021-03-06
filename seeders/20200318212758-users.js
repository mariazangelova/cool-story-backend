"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Maria",
          email: "maria@test.com",
          password: bcrypt.hashSync("maria", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Test",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Dummy",
          email: "dummy@dummy.com",
          password: bcrypt.hashSync("dummy1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
