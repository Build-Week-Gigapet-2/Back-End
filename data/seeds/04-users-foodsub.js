const knexfile = require("../../knexfile");
const knex = require("knex")(knexfile.dev);
const date = knex.fn.now();

exports.seed = async (knex) => {
  await knex("users_foodsub").insert([
    { user_id: 1, food_id: 1, date: `${date}` },
    { user_id: 1, food_id: 2, date: `${date}`},
    { user_id: 2, food_id: 3, date: `${date}`},
  ])
}