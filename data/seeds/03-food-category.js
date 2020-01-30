exports.seed = async (knex) => {
  await knex("food_category").insert([
    { id: 1, name: "Fruit" },
    { id: 2, name: "Vegetable" },
    { id: 3, name: "Whole Grains" },
    { id: 4, name: "Meat" },
    { id: 5, name: "Dairy" },
    { id: 6, name: "Fats & Oils" },
    { id: 7, name: "Treats" }
  ])
}