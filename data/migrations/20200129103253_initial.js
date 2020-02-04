exports.up = async function(knex) {
    await knex.schema.createTable("users", (table) => {
        table.increments("id")
        table.string("username", 255).notNullable().unique()
        table.string("password", 255).notNullable()
    });

    await knex.schema.createTable("children", (table) => {
        table.increments("id")
        table.string("name").notNullable
        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })

    await knex.schema.createTable("food_category", (table) => {
        table.increments("id")
        table.string("name").notNullable()
    })
    
    await knex.schema.createTable("food_items", (table) => {
        table.increments("id")
        table.string("name")
        table.string("date").notNullable().defaultTo(knex.fn.now())
        table.string("unit_measurement").notNullable()
        table.float("quantity").notNullable()
        
        table.integer("category_id")
        .notNullable()
        .references("id")
        .inTable("food_category")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    })

    await knex.schema.createTable("children_food_item", (table) => {
        table.integer("child_id")
            .notNullable()
            .references("id")
            .inTable("children")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.integer("food_id")
            .notNullable()
            .references("id")
            .inTable("food_items")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
        table.primary(["child_id", "food_id"])
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("children_food_item")
    await knex.schema.dropTableIfExists("food_items")
    await knex.schema.dropTableIfExists("food_category")
    await knex.schema.dropTableIfExists("children")
    await knex.schema.dropTableIfExists("users")
}