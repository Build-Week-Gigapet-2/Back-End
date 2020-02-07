exports.seed = async function(knex) {
  await knex("children").insert([
    { name: "child_1", user_id: 1 },
    { name: "child_2", user_id: 1 },
    { name: "child_3", user_id: 2 },
    { name: "child_4", user_id: 3 },
  ])
};