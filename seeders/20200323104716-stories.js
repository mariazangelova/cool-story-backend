"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Sunday morning",
          content: "Sunday morning I went to AH and bought some food",
          imageUrl: "",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Sunday afternoon",
          content:
            "I read a book called Saned Souls. It is about the Spanish War and epidemics.",
          imageUrl: "",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "This morning",
          content: "For breakfast I ate bread, butter and jam.",
          imageUrl: "",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "On Monday",
          content: "I got hyper confused and angry.",
          imageUrl: "",
          homepageId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("stories", null, {});
  }
};
