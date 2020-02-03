exports.seed = async function(knex) {
  await knex("children_food_item").truncate()
  await knex("food_items").del()
  await knex("food_category").truncate()
  await knex("children").truncate()
  await knex("users").truncate()
}