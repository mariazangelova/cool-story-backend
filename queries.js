const { user: User, story: Story, Like } = require("./models");

Story.findAll({
  include: { model: User, attributes: ["id", "name"] }
}).then(stories =>
  stories.map(story => console.log("story", story.get({ plain: true })))
);
