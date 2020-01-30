const db = require("../data/dbConfig")

function getAllChildrensFoodItems() {
    return db("food_items as fi")
        .leftJoin("food_category AS fc", "fc.id", "fi.id")
        .leftJoin("children_food_item AS cfi", "cfi.food_id", "fi.id")
        .select("*")
}

function getChildFoodItems(id) {
    return db("food_items as fi")
        .where({ id })
        .first()
}

async function addChildFoodItem() {
    const [id] = await db("food_items").insert(data)
    return db("food_items").where({ id }).first()
}

module.exports = {
    getAllChildrensFoodItems,
    getChildFoodItems,
    addChildFoodItem
}