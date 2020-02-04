exports.seed = async (knex) => {
  await knex("food_items").insert([
    { id: 1, category_id: 4, name: "Chicken", date: "02-03-2020", unit_measurement: "cups", quantity: 1  },
    { id: 2, category_id: 7, name: "Marmite", date: "01-16-2020", unit_measurement: "oz", quantity: 4  },
    { id: 3, category_id: 2, name: "Tomato Soup", date: "01-01-2020", unit_measurement: "oz", quantity: 10  }
  ])
}