const router = require("express").Router();
const controller = require("../controllers");

router.get("/", async (req, res) => {
  res.json({ message: "Hello!" });
});

router.get("/api/city", controller.getCity);

module.exports = router;
