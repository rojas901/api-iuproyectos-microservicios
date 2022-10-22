const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola estoy en crear usuario GET");
});

router.post("/", (req, res) => {
  res.send("Hola estoy en crear usuario POST");
});

router.put("/", (req, res) => {
  res.send("Hola estoy en crear usuario PUT");
});

router.delete("/", (req, res) => {
  res.send("Hola estoy en crear usuario DELETE");
});

module.exports = router;
