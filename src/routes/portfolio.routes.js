const { Router } = require("express");
const {
  getUserTweets,
} = require("../controllers/portfolio.controller");

const router = Router();

router.get("/tweets/:user_name", getUserTweets);

module.exports = router;
