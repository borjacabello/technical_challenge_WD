const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const phoneRoutes = require("./phone.routes")
router.use("/phones", phoneRoutes)

module.exports = router;
