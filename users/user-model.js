const db = require("../data/dbConfig")
const bcrypt = require ("bcryptjs")

function findUsers() {
    return db("users")
}

function findBy(filter) {
    return db("users")
        .where(filter)
        .select("id", "username", "password")
}

function findUserById(id) {
    return db("users").where({ id }).first()
}

async function addUser(user) {
    user.password = await bcrypt.hash(user.password, 14)

    const [id] = await db("users").insert(user)

    return findUserById(id)
}

async function updateUser(id, changes) {
    await db("users")
        .where({ id })
        .update(changes)

    return findById
}

function removeUser(id) {
    return db("users").where({ id }).del()
}

module.exports = {
    findUsers,
    findBy,
    findUserById,
    addUser,
    updateUser,
    removeUser
}