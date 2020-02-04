exports.seed = async function(knex) {
  await knex("children_food_item").truncate()
  await knex("food_items").delete()
  await knex("food_category").delete()
  await knex("children").truncate()
  await knex("users").truncate()
}