const { Router } = require("express");
const proyectoController = require('../controllers/proyecto')

const router = Router();

router.get("/", proyectoController.find);
router.get("/:id", proyectoController.findById);

module.exports = router;
