/* eslint-disable no-undef */
const router = require("express").Router();

router.get("/", (req, res) => {
  // #swagger.tags = ['Home']
  // #swagger.description = 'Home page endpoint'
  res.send("Welcome to the home page!");
});

router.use(
  "/",
  require("./contacts"),
  // #swagger.tags = ['Contacts']
  // #swagger.description = 'Contacts page endpoint'
);

router.use("/", require("./swagger"));

module.exports = router;
