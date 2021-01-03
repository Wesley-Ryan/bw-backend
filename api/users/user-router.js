const express = require("express");
const Helper = require("./user-model");
const ProjectHelper = require("../projects/project-model");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Helper.findByID(id);
    const userProjects = await ProjectHelper.getByOwnerId(id);
    res
      .status(200)
      .json({
        username: user.username,
        role: user.role,
        projects: userProjects,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
