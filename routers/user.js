const { Router } = require("express");
const router = new Router();
const User = require("../models").user;

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});
router.post("/", async (req, res, next) => {
  const newUser = await User.create(req.body);
  res.send(newUser);
  next();
});
module.exports = router;
