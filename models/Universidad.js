const { model, Schema } = require("mongoose");

const UniversidadSchema = Schema({
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  telefono: {
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

module.exports = model("Universidad", UniversidadSchema);
