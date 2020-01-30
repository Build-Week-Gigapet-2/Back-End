const db = require("../data/dbConfig")

function getChildrenFoodItems() {
    return db("children_food_item as cfi")
        .leftJoin("food_items as f", "f.id", "cfi.food_id")
        .select("*")
}

function getChildFoodItems(child_id) {
    return db("children_food_item as cfi")
    .join("food_items as f", "f.id", "cfi.food_id")
    .where({ child_id })
    .select("*")
}

async function addChildFoodItem() {
    const [id] = await db("food_items").insert(data)
    return db("food_items").where({ id }).first()
}

module.exports = {
    getChildrenFoodItems,
    getChildFoodItems,
    addChildFoodItem
}