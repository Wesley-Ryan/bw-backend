const express = require("express");
const Helper = require("./project-model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Helper.getAll();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
