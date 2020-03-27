const { Router } = require("express");
const router = new Router();
const Homepage = require("../models").homepage;
const Story = require("../models").story;
const User = require("../models/").user;
const Like = require("../models/").like;

const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res) => {
  try {
    const homepages = await Homepage.findAll({
      include: [
        { model: Story, include: { model: User, attributes: ["id", "name"] } }
      ]
    });
    res.send(homepages);
  } catch (e) {
    next(e);
  }
});
router.get("/:id", async (req, res) => {
  const homepageId = parseInt(req.params.id);
  const homepage = await Homepage.findByPk(homepageId, {
    include: [
      { model: Story, include: { model: User, attributes: ["id", "name"] } }
    ]
  });
  if (!homepage) {
    res.status(404).send("No homepage found");
  } else {
    res.send(homepage);
  }
});

router.post("/", async (req, res, next) => {
  let data = {};
  req.body.name
    ? (data = { title: `${req.body.name}'s homepage`, userId: req.body.userId })
    : (data = req.body);
  //console.log("title", data);
  const newHomepage = await Homepage.create(data);
  res.send(newHomepage);
  next();
});
router.put("/:homepageId", authMiddleware, async (req, res, next) => {
  const homepageId = parseInt(req.body.homepageId);
  const pageToUpdate = await Homepage.findByPk(homepageId);
  let data = {
    title: req.body.title,
    description: req.body.description,
    color: req.body.color,
    backgroundColor: req.body.backgroundColor
  };
  const updatedHomepage = await pageToUpdate.update(data);
  res.send(updatedHomepage);
  next();
});

router.post(
  "/stories/:storyId/like",
  authMiddleware,
  async (req, res, next) => {
    const { storyId } = req.params;
    const userId = req.user.id;
    console.log("INFORMATION?", userId, storyId);
    const like = await Like.findOne({ where: { storyId, userId } });
    console.log("like", like);
    if (like === null) {
      try {
        const addLike = await Like.create({ userId, storyId });
        console.log("liked?", addLike);
        res.send({ userId, storyId });
      } catch (e) {
        next(e);
      }
    } else {
      const deleteLike = await like.destroy();
      console.log("like deleted?", deleteLike);
      res.send("DELETED");
    }
  }
);
router.delete(
  "/:homepageId/stories/:storyId",
  authMiddleware,
  async (req, res, next) => {
    const { storyId } = req.params;
    try {
      const story = await Story.findByPk(storyId);
      console.log("DELETING");
      if (!story) {
        return res.status(404).send("Story not found");
      }

      console.log("The story exists");
      const result = await story.destroy();

      console.log("story deleted", result);
      res.json({ storyId });
    } catch (e) {
      next(e);
    }
  }
);

module.exports = router;
