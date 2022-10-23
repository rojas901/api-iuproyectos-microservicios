const { model, Schema } = require("mongoose");

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: true,
        unique: true,
    },
    titulo: {
        type: String,
        required: true,
    },
    fechaIniciacion: {
        type: Date,
        required: true,
    },
    fechaEntrega: {
        type: Date,
        required: true,
    },
    valor: {
        type: Number,
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
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',//tomado del model de cliente, tiene que ser igual
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
    },
});

module.exports = model("Proyecto", ProyectoSchema);
