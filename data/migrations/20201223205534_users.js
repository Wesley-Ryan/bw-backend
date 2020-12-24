exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments();
      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
      users
        .integer("role")
        .unsigned()
        .notNullable()
        .references("role_id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("roles", (roles) => {
      roles.increments("role_id");
      roles.string("name", 255).notNullable().unique();
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("roles");
};
