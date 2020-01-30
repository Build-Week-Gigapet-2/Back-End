const db = require("../data/dbConfig")
const bcrypt = require ("bcryptjs")

function findUsers() {
    return db("users");
}

function findBy(filter) {
    return db("users")
        .where(filter)
        .select("id", "username", "password");
}

function findUserById(id) {
    return db("users").where({ id }).first();
}

function findUserChildren(user_id) {
    // SELECT u.username, u.id as user_id, c.name as child_name FROM users AS u
    // JOIN children AS c ON c.user_id = u.id;

    return db("users as u")
        .leftJoin("children as c", "c.user_id", "u.id")
        .select("u.username", "u.id as user_id", "c.name as child_name")
        .where({ user_id })
}

async function addUser(user) {
    const salt = await bcrypt.genSalt(14)
    const hashedPass = await bcrypt.hash(user.password, salt)
    user.password = hashedPass;

    const [id] = await db("users").insert(user);

    return findUserById(id);
}

async function updateUser(id, changes) {
    await db("users")
        .where({ id })
        .update(changes);

    return findById;
}

function removeUser(id) {
    return db("users").where({ id }).del();
}

module.exports = {
    findUsers,
    findBy,
    findUserById,
    findUserChildren,
    addUser,
    updateUser,
    removeUser
}