exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          project_title: "Project 1 ",
          project_type: "VR",
          mission_statement: "Get the money and don't run.",
          project_description:
            "A VR project start up aimed at creating a awesome experience.",
          funding_amount: 300.0,
          project_timeline: "3 weeks",
          project_assets: "1 dev, and a computer.",
          owner_id: 2,
        },
        {
          project_title: "Project 2 ",
          project_type: "Not VR",
          mission_statement: "Do good.",
          project_description:
            "A VR project start up aimed at creating a awesome experience.",
          funding_amount: 300.0,
          project_timeline: "3 weeks",
          project_assets: "1 dev, and a computer.",
          owner_id: 3,
        },
      ]);
    });
};
