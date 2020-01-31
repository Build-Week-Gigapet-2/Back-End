const db = require("../data/dbConfig")

function findUserChildren(user_id) {
    // SELECT u.username, u.id as user_id, c.name as child_name FROM users AS u
    // JOIN children AS c ON c.user_id = u.id;

    return db("users as u")
        .leftJoin("children as c", "c.user_id", "u.id")
        .select("u.username", "u.id as user_id", "c.name as child")
        .where({ user_id })
}

function findUsersChildById(user_id) {
    return db("children as c")
        .join("users as u", "u.id", "c.user_id")
        .select("c.id", "c.name")
        .where({ user_id })
        .first()
}

async function addChild(data) {
    const [id] = await db("children").insert(data)
    return db("children").where({ id }).first()
}

function removeChild(id) {
    return db("children").where({ id }).del()
}

module.exports = {
    findUserChildren,
    findUsersChildById,
    addChild,
    removeChild
}