exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "First-User",
          password: "salkdasldask3242389e4ijagjhgjkllpsfdksanf",
          role: 1,
        },
        {
          username: "Second-User",
          password: "salkdasldask3242389e4saghjghjdasij;'8asfdk",
          role: 1,
        },
        {
          username: "Third-User",
          password: "salkdasldask32ghj42389e6664sadasijasf456dk",
          role: 1,
        },
        {
          username: "Fourth-User",
          password: "salkdasldask3242389e4saasdsadsadsgf34534dk",
          role: 2,
        },
      ]);
    });
};
