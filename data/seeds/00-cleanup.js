exports.seed = async function(knex) {
  await knex("users_foodsub").truncate()
  await knex("food_items").truncate()
  await knex("food_category").truncate()
  await knex("users").truncate()
}