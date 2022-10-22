const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hola estoy en crear tipoProyecto GET");
});

router.post("/", (req, res) => {
  res.send("Hola estoy en crear tipoProyecto POST");
});

router.put("/", (req, res) => {
  res.send("Hola estoy en crear tipoProyecto PUT");
});

router.delete("/", (req, res) => {
  res.send("Hola estoy en crear tipoProyecto DELETE");
});

module.exports = router;
