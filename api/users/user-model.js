const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("users");
  },
  findByID(id) {
    return db("users").where("id", id).first();
  },

  async create(user) {
    const [id] = await db("users").insert(user);
    return db("users").where("id", id).first();
  },
};
