const { model, Schema } = require("mongoose");

const EtapaSchema = Schema({
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

module.exports = model("Etapa", EtapaSchema);
