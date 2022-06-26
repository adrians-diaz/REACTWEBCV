const { deleteFile } = require("../../middlewares/deleteFile");
const Experiencia = require("../models/Experiencia.model");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode")



const getAllExperiencia = async (req, res, next) => {
  try {
    const allExperiencia = await Experiencia.find().populate("id_proyectos");
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Experiencia: allExperiencia,
    });
  } catch (error) {
    return next(error);
  }
};


const getExperienciaByID = async (req, res, next) => {
  try {
    const id = req.params.id;
    const ExperienciaByID = await Experiencia.findById(id);
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Experiencia: ExperienciaByID,
    });
  } catch (error) {
    return next(error);
  }
};


const createExperiencia = async (req, res, next) => {
  try {
    const newExperiencia = new Experiencia(req.body);
    if (req.file) {
      newExperiencia.image = req.file.path;
      
    }
    const createdExperiencia = await newExperiencia.save();
    return res.json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      Experiencia: createdExperiencia,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteExperiencia = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const ExperienciaBorrado = await Experiencia.findByIdAndDelete(id);
  
      return res.status(200).json(ExperienciaBorrado);
    } catch (error) {
      return next(error);
    }
  };
  
  const patchExperiencia = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchExperiencia = new Experiencia(req.body);
  
      patchExperiencia._id = id;

      const ExperienciaData= await Experiencia.findById(id)

      // patchExperiencia.autor =[...cuadroData.autor, ...patchCuadro.autor]

      if (ExperienciaData.image.link) {
        /* deleteFile(ExperienciaData.image.link); */
        }

      if (req.file) {
        patchExperiencia.image.link = req.file.path;
      }
  
      const ExperienciaDB = await Experiencia.findByIdAndUpdate(id, patchExperiencia);
      
      return res.status(200).json({ nuevo: patchExperiencia, vieja: ExperienciaDB });
    } catch (error) {
      return next(error);
    }
  };

module.exports = { getAllExperiencia, getExperienciaByID, createExperiencia,patchExperiencia,deleteExperiencia};
