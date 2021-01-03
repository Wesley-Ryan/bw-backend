const express = require("express");
const Helper = require("./user-model");
const ProjectHelper = require("../projects/project-model");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userInfo = await Helper.findByID(id);
    const userProjects = await ProjectHelper.getByOwnerId(id);
    res.status(200).json({ user: userInfo, projects: userProjects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
