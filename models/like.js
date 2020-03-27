"use strict";
module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define(
    "like",
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      storyId: {
        type: DataTypes.INTEGER,
        references: {
          model: "stories",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    },
    {}
  );
  like.associate = function(models) {
    like.belongsTo(models.user);
    like.belongsTo(models.story);
  };
  return like;
};
