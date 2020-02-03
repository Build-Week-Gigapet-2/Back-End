const db = require("../data/dbConfig")

// SELECT * FROM children AS c
// JOIN children_food_item AS cfi ON cfi.child_id = c.id
// JOIN food_items AS f ON f.id = cfi.food_id;

function getChildrenFoodItems(user_id) {
    return db("children as c")
        .leftJoin("children_food_item as cfi", "cfi.child_id", "c.id")
        .leftJoin("food_items as f", "f.id", "cfi.food_id")
        .select("*")
        .where({ user_id })
}

function getFoodItems(child_id) {
    return db("children_food_item as cfi")
    .leftJoin("food_items as f", "f.id", "cfi.food_id")
    .where({ child_id })
    .select("*")
}

module.exports = {
    getChildrenFoodItems,
    getFoodItems,
}