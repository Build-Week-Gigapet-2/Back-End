exports.seed = async (knex) => {
  await knex("children_food_item").insert([
    { child_id: 1, food_id: 1 },
    { child_id: 2, food_id: 2 },
    { child_id: 3, food_id: 3 },
  ])
}