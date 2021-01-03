const express = require("express");
const Helper = require("./project-model");
const {
  validateUserFundraiserRole,
  validator,
} = require("../middlewares/validation-middleware");
const router = express.Router();

router.get("/", validator, async (req, res) => {
  try {
    const projects = await Helper.getAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", validator, async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Helper.getById(id);
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", validator, validateUserFundraiserRole, async (req, res) => {
  const project = req.body;
  try {
    const newProjectPost = await Helper.create(project);
    res.status(201).json(newProjectPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", validator, async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updatedProject = await Helper.edit(id, changes);
    res.status(201).json(updatedProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", validator, async (req, res) => {
  const { id } = req.params;
  try {
    await Helper.remove(id);
    const projects = await Helper.getAll();
    res.status(201).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
