const { model, Schema } = require("mongoose");

const TipoProyectoSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaCreacion: {
    type: Date,
    default: new Date(),
    required: true,
  },
  fechaActualizacion: {
    type: Date,
    default: new Date(),
    required: true,
  },
});

module.exports = model("TipoProyecto", TipoProyectoSchema);
