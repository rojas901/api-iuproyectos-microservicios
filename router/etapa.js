const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola estoy en crear etapa GET");
});

router.post("/", (req, res) => {
  res.send("Hola estoy en crear etapa POST");
});

router.put("/", (req, res) => {
  res.send("Hola estoy en crear etapa PUT");
});

router.delete("/", (req, res) => {
  res.send("Hola estoy en crear etapa DELETE");
});

module.exports = router;
