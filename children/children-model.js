const db = require("../data/dbConfig")

function find(user_id) {
    // SELECT u.username, u.id as user_id, c.name as child_name FROM users AS u
    // JOIN children AS c ON c.user_id = u.id;

    return db("users as u")
        .leftJoin("children as c", "c.user_id", "u.id")
        .select("u.id as user_id", "u.username", "c.id as child_id", "c.name as child")
        .where({ user_id })
}

function findById(child_id) {
    return db("children as c")
        .join("users as u", "u.id", "c.user_id")
        .select("u.id as user_id", "c.id as child_id", "c.name as child")
        .where({ child_id })
        .first()
}

async function add(data) {
    const [id] = await db("children").insert(data, 'id')
    return db("children").where({ id }).first()
}

function remove(id) {
    return db("children").where({ id }).del()
}

module.exports = {
    find,
    findById,
    add,
    remove
}