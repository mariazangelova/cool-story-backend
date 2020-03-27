"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "homepages",
      [
        {
          title: "Maria's page",
          description: "Personal stories",
          backgroundColor: "#501442",
          color: "",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Test's page",
          description: "Personal stories",
          backgroundColor: "#cb9e37",
          color: "",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Dummy's page",
          description: "Personal stories",
          backgroundColor: "#50af50",
          color: "",
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("homepages", null, {});
  }
};
