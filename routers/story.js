const { Router } = require("express");
const router = new Router();
const Story = require("../models").story;
const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res) => {
  const stories = await Story.findAll();
  res.send(stories);
});
router.post("/", authMiddleware, async (req, res, next) => {
  const newStory = await Story.create(req.body);
  res.send(newStory);
  next();
});
module.exports = router;
