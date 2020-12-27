const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("projects");
  },
  findBy(filter) {
    return db("projects").where(filter);
  },

  async create(project) {
    const [id] = await db("projects").insert(project);
    return db("projects").where("project_id", id).first();
  },
};
