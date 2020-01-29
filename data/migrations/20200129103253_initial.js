exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.string("username", 255).notNullable().unique()
        table.string("password", 255).notNullable()
    });

    await knex.schema.createTable("food_category", (table) => {
        table.increments("id")
        table.string("name").notNullable()
    })

    await knex.schema.createTable("food_items", (table) => {
        table.increments("id")
        table.string("name")
        
        table.integer("category_id")
            .notNullable()
            .references("id")
            .inTable("food_category")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    })

    await knex.schema.createTable("users_foodsub", (table) => {
        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("food_id")
            .notNullable()
            .references("id")
            .inTable("food_items")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.date("date").notNullable()
        table.primary(["user_id", "food_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("users_foodsub")
    await knex.schema.dropTableIfExists("food_items")
    await knex.schema.dropTableIfExists("food_category")
    await knex.schema.dropTableIfExists("users")
}