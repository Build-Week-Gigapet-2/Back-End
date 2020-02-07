exports.seed = async (knex) => {
  await knex("food_items").insert([
    { id: 1, category_id: 4, name: "Chicken", unit_measurement: "cups", quantity: 1  },
    { id: 2, category_id: 7, name: "Marmite", unit_measurement: "oz", quantity: 4  },
    { id: 3, category_id: 2, name: "Tomato Soup", unit_measurement: "oz", quantity: 10  }
  ])
}