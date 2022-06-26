const express = require("express");

const router = express.Router();
const upload = require("../../middlewares/file")
const {isAuth} = require("../../middlewares/auth.middleware");

const {
  getAllExperiencia,
  getExperienciaByID,
  createExperiencia,
  deleteExperiencia,
  patchExperiencia,
} = require("../controllers/experiencia.controller");

router.get("/", getAllExperiencia);
router.get("/:id", getExperienciaByID);
router.post("/"/* ,[isAuth] */, upload.single("image"), createExperiencia);
router.delete('/:id'/* ,[isAuth] */, upload.single("image"), deleteExperiencia);
router.patch('/:id'/* ,[isAuth] */, upload.single("image"), patchExperiencia)

module.exports = router;
