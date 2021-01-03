const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("projects");
  },
  getById(id) {
    return db("projects").where("project_id", id);
  },
  getByOwnerId(id) {
    return db("projects").where("owner_id", id);
  },

  async create(project) {
    const [id] = await db("projects").insert(project);
    return db("projects").where("project_id", id).first();
  },
  async edit(id, changes) {
    await db("projects").where("project_id", id).update(changes);
    return db("projects").where("project_id", id);
  },

  remove(id) {
    return db("projects").where("project_id", id).del();
  },
};
