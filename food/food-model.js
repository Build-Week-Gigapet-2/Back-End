const db = require("../data/dbConfig")

// SELECT * FROM children AS c
// JOIN children_food_item AS cfi ON cfi.child_id = c.id
// JOIN food_items AS f ON f.id = cfi.food_id;

function getAllFoodItems() {
    return db("food_items as f")
    .leftJoin("food_category as fc", "fc.id", "f.category_id")
    .select("f.id", "f.name", "f.category_id", "f.date", "f.quantity", "f.unit_measurement", "fc.name as category")
}

function getFoodItemById(id) {
    return db("food_items").where({ id }).first()
}

async function addFoodItem(food_item) {
    const [id] = await db("food_items")
        .insert(food_item, 'id')
        .returning("*")
    return getFoodItemById(id)
}

async function updateFoodItem(id, food_item) {
    await db("food_items")
        .where({ id })
        .update(food_item)
        .returning("*")
}

function delFoodItem(id) {
    return db("food_items").where({ id }).del()
}

function getCategory() {
    // SELECT * FROM food_items AS fi
    // JOIN food_category AS fc WHERE fc.id = fi.category_id;

    return db("food_category as fc")
    .select("*")
}

function getCategoryById(id) {
    return db("food_category").where({ id }).first()
}

async function addCategory(food_cat) {
    const [id] = await db("food_category").insert(food_cat, 'id')
    return getCategoryById(id)
}

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
    .leftJoin("food_category as fc", "fc.id", "f.category_id")
    .where({ child_id })
    .select("f.id", "f.name", "f.category_id", "fc.name as category")
}

module.exports = {
    getAllFoodItems,
    getFoodItemById,
    addFoodItem,
    updateFoodItem,
    delFoodItem,
    getCategory,
    getCategoryById,
    addCategory,
    getChildrenFoodItems,
    getFoodItems,
}