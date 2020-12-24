const db = require("../../data/dbConfig");

module.exports = {
  getAll() {
    return db("users");
  },
  findBy(filter) {
    return db("users").where(filter);
  },

  async create(user) {
    const [id] = await db("users").insert(user);
    return db("users").where("id", id).first();
  },
};
