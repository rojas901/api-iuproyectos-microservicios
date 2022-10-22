const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola estoy en crear universidad GET");
});

router.post("/", (req, res) => {
  res.send("Hola estoy en crear universidad POST");
});

router.put("/", (req, res) => {
  res.send("Hola estoy en crear universidad PUT");
});

router.delete("/", (req, res) => {
  res.send("Hola estoy en crear universidad DELETE");
});

module.exports = router;
