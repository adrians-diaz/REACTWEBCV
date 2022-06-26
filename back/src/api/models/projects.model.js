const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    URL: { type: String, required: false },
    image: {type: String, required: false },
    id_herramientas: [
      { type: Schema.Types.ObjectId, ref: "Herramientas", required: false },
    ]
  },
  { timestamps: true }
);

const Projects = mongoose.model("Projects", ProjectsSchema);

module.exports = Projects;