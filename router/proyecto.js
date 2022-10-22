const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola estoy en crear Proyecto GET");
});

router.post("/", (req, res) => {
  res.send("Hola estoy en crear Proyecto POST");
});

router.put("/", (req, res) => {
  res.send("Hola estoy en crear Proyecto PUT");
});

router.delete("/", (req, res) => {
  res.send("Hola estoy en crear Proyecto DELETE");
});

module.exports = router;
