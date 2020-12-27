const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("projects");
  },
  getById(id) {
    return db("projects").where("project_id", id);
  },

  async create(project) {
    const [id] = await db("projects").insert(project);
    return db("projects").where("project_id", id).first();
  },
};
