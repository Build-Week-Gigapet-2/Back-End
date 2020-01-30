const date = Date.now();

exports.seed = async (knex) => {
  await knex("children_food_item").insert([
    { child_id: 1, food_id: 1, unit_measurement: "cups", quantity: 1 },
    { child_id: 2, food_id: 2, unit_measurement: "oz", quantity: 4 },
    { child_id: 3, food_id: 3, unit_measurement: "oz", quantity: 10 },
  ])
}