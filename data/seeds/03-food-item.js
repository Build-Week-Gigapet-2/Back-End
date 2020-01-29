exports.seed = async (knex) => {
  await knex("food_items").insert([
    { id: 1, category_id: 4, name: "Chicken" },
    { id: 2, category_id: 7, name: "Marmite" },
    { id: 3, category_id: 2, name: "Tomato Soup" }
  ])
}