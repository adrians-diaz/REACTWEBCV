const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExperienciaSchema = new Schema(
  {
    name: { type: String, required: true },
    descripcion: { type: String, required: false },
    image: { type: String, required: false},
    fecha_inicio: { type: String, required: true },
    fecha_fin: { type: String, required: true },
    id_proyectos: [
        { type: Schema.Types.ObjectId, ref: "Projects", required: false },
      ]
  },
  { timestamps: true }
);

const Experiencia = mongoose.model("Experiencias", ExperienciaSchema);

module.exports = Experiencia;