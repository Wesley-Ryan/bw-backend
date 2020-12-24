exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "First-User",
          password: "salkdasldask3242389e4ijasfdksanf",
          role: 1,
        },
        {
          username: "Second-User",
          password: "salkdasldask3242389e4sadasijasfdk",
          role: 2,
        },
      ]);
    });
};
