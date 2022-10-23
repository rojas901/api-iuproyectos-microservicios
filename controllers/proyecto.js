const Proyecto = require("../models/Proyecto");

const proyectoController = {
  create: async (req, res) => {
    const proyecto = new Proyecto(req.body);
    try {
      if (await Proyecto.findOne({ numero: req.body.numero })) {
        return res.status(200).json({ msg: "El proyecto ya existe." });
      } else {
        await proyecto.save();
        return res.status(200).json(proyecto);
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Petición invalida" });
    }
  },
  find: async (req, res) => {
    try {
      const proyecto = await Proyecto.find().
      populate({path: 'cliente', select: 'nombre'}).
      populate({path: 'tipoProyecto', select: 'nombre'}).
      populate({path: 'universidad', select: 'nombre'}).
      populate({path: 'etapa', select: 'nombre'});
      return res.status(200).json(proyecto);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Petición invalida" });
    }
  },
  update: async (req, res) => {
    try {
      const proyecto = await Proyecto.findByIdAndUpdate(
        req.params.id,
        { ...req.body, fechaActualizacion: new Date() },
        { returnOriginal: false }
      );
      return res.status(200).json(proyecto);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Petición invalida" });
    }
  },
  delete: async (req, res) => {
    try {
      if (await Proyecto.findByIdAndDelete(req.params.id)) {
        return res
          .status(200)
          .json({ msg: `Se ha borrado el proyecto con id: ${req.params.id}` });
      } else {
        return res.status(404).json({ msg: "El proyecto no existe." });
      }
    } catch (error) {
      console.log(error);
      return res.status(400).json({ msg: "Petición invalida" });
    }
  },
};

module.exports = proyectoController;
